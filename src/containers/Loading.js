import Container from '../components/Container';
import Spinner from '../components/Spinner';

function Loading() {
  return (
    <Container justifyContent="center" pt="default">
      <Spinner />
    </Container>
  )
}

export default Loading