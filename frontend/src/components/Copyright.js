import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`This a demo project built off of Wes Bos's `}
      <Link color="inherit" href="https://advancedreact.com/">
        Advanced React
      </Link>{' '}
      {`Course.`}
    </Typography>
  );
}
