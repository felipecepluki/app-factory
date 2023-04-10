import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";
import Feather from "@expo/vector-icons/Feather";

export default function HistoryList({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.type}>
          <Feather
            name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
            size={20}
            color="#FFF"
          />
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>R$ {data.value}</ValorText>
    </Container>
  );
}
