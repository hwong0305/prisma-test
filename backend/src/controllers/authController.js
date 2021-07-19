import express from 'express';
import crypto from 'crypto';
import {promisify} from 'util';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const {scrypt} = promisify(crypto);

async function hashPassword(password) {
  const salt = crypto.randomBytes(8).toString('hex');
  const hash = await scrypt(password, salt, 64);
  const derivedKey = `${salt}:${hash.toString('hex')}`;

  return derivedKey;
}

async function verify(password, hash) {
  const [salt, key] = hash.split(':');
  const keyBuffer = Buffer.from(key, 'hex');
  const derivedKey = await scrypt(password, salt, 64);
  return crypto.timingSafeEqual(keyBuffer, derivedKey);
}

router.get('/', async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch {
    res.status(500).send({
      error: 'Error getting users',
    });
  }
});

router.post('/', async (req, res) => {
  const {email, password} = req.body;
  const hash = await hashPassword(password);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });

    res.json(user);
  } catch {
    res.status(500).send({
      error: 'Error creating user',
    });
  }
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).send({
        error: 'User does not exist',
      });
    }

    const hash = user.password;

    const isPasswordValid = await verify(password, hash);

    if (!isPasswordValid) {
      return res.status(400).send({
        error: 'Incorrect password',
      });
    }

    res.json(user);
  } catch {
    res.status(500).send({
      error: 'Server error',
    });
  }
});

export default router;
