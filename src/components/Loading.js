import Container from './Container';
import Spinner from '../components/Spinner';

function Loading() {
  return (
    <Container display="flex" justifyContent="center" py="32">
      <Spinner />
    </Container>
  )
}

export default Loading