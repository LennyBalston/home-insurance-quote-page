import Container from './Container';
import Typography from '../components/Typography';

function Error() {
  return (
    <Container
      display="flex"
      backgroundColor="white"
      justifyContent="center"
      p="32" my="32"
      borderRounded
    >
      <Typography fontSize="20">
        {process.env.REACT_APP_ERROR_MESSAGE}
      </Typography>
    </Container>
  )
}

export default Error
