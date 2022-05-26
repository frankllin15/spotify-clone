import { useRouter } from "next/router";
import { Container, Text } from "../components/Error/styles";
import { Title } from "../components/Home/styles";

export default function ErrorPage() {
  const router = useRouter();
  const { query } = router;

  return (
    <Container>
      <Title>Error</Title>
      {query.message ? (
        <Text>{query.message}</Text>
      ) : (
        <Text>An unknown error occurred</Text>
      )}
    </Container>
  );
}
