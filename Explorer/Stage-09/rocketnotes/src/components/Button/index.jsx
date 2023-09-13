import { Container } from "./style";

export function Button({ buttonText: text, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : text}
    </Container>
  );
}
