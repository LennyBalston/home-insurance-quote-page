import Container from '../components/Container';

function Error() {
  return (
    <Container pt="default">
      <p>{process.env.REACT_APP_ERROR_MESSAGE} </p>
    </Container>
  )
}

export default Error
