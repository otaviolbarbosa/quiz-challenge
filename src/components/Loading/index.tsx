import React from "react";
import * as S from "./styles";
import "./styles.css";

function Loading() {
  return (
    <S.Container>
      <S.Spinner />
      Loading
    </S.Container>
  );
}

export default Loading;
