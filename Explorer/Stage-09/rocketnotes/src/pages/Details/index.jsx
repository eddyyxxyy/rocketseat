import { Container } from "./style.js";
import { Button } from "../../components/Button/index.jsx";

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Edson Pimenta</span>
      <Button buttonText={"Clique aqui"} />
      <Button buttonText={"Não clique aqui"} />
      <Button buttonText={"Pode clicar nesse aqui"} />
      <Button buttonText={"Muahaha"} />
    </Container>
  );
}
