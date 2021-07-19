import express from 'express';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const items = await prisma.items.findMany();
  res.json(items);
});

router.post('/', async (req, res) => {
  if (!req.user) {
    return res.status(500).send({
      error: 'You must be logged in to create item to sell',
    });
  }

  const {image, name, price, userId} = req.body;

  const item = await prisma.item.create({
    data: {
      image,
      name,
      price,
      userId,
    },
  });

  res.json(item);
});

export default router;
