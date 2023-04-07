import React from "react";
import { AuthContext } from "../../contexts/auth";
import { Background } from "./styles";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Background>
      <Header title="Minhas movimentações" />
    </Background>
  );
}
