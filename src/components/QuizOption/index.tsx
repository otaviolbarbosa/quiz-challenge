import React from "react";

import { IQuizChoice } from "../../types";
import * as S from "./styles";

interface IProps {
  option: IQuizChoice;
  letter: string;
  active?: boolean;
  onClick: (option: IQuizChoice) => void;
}
function QuizOption({ option, letter, active = false, onClick }: IProps) {
  const handleClick = () => {
    onClick(option);
  };

  return (
    <S.Container active={active} onClick={handleClick}>
      <S.Letter active={active}>{letter}</S.Letter>
      <S.Label active={active}>{option.text}</S.Label>
      {active && <S.CheckIcon />}
    </S.Container>
  );
}

export default QuizOption;
