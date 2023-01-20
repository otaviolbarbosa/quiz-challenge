import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import env from "react-dotenv";

import { setAnswer } from "../../redux/quizSlice";
import { RootState } from "../../redux/store";
import { IQUizAnswers, IQuizChoice, IQuizQuestion } from "../../types";
import { mapLetters } from "../../util/quizOptionUtil";
import QuizOption from "../QuizOption";
import * as S from "./styles";

interface IProps {
  question: IQuizQuestion;
  onPrevious: () => void;
  onNext: () => void;
  isfirstQuestion: boolean;
  isLastQuestion: boolean;
}
function QuizQuestion({
  question,
  onPrevious,
  onNext,
  isfirstQuestion,
  isLastQuestion,
}: IProps) {
  const { quizAnswers } = useSelector(
    ({ quizReducer }: RootState) => quizReducer
  );
  const dispatch = useDispatch();

  const handleSelectOption = (option: IQuizChoice) => {
    dispatch(setAnswer({ key: question.id, value: option.value }));
  };

  const isActive = (option: IQuizChoice) =>
    quizAnswers && quizAnswers[question.id] === option.value;

  const handleSubmit = async () => {
    try {
      const questionIds = Object.keys(quizAnswers as IQUizAnswers);

      const resolvedAnswers = questionIds.map((questionId) => ({
        questionId,
        value: (quizAnswers as IQUizAnswers)[questionId],
      }));

      await axios.post(env.API_URL, {
        answers: resolvedAnswers,
      });
    } catch (error) {
      console.log("[Error] ", (error as Error).message);
    } finally {
      onNext();
    }
  };

  return (
    <S.Container>
      <S.QuizQuestion>{question.headingText}</S.QuizQuestion>
      {question.choice.choices.map((option, index) => (
        <QuizOption
          key={`key-option-${question.id}-${index}`}
          letter={mapLetters[index]}
          option={option}
          active={isActive(option)}
          onClick={handleSelectOption}
        />
      ))}
      <S.ButtonsContainer>
        {!isfirstQuestion ? (
          <S.Button onClick={onPrevious}>
            <S.LeftIcon /> Previous
          </S.Button>
        ) : (
          <div />
        )}
        {!isLastQuestion ? (
          <S.Button
            disabled={
              isLastQuestion || !(quizAnswers && quizAnswers[question.id])
            }
            onClick={onNext}
          >
            Next <S.RightIcon />
          </S.Button>
        ) : (
          <S.Button
            disabled={!(quizAnswers && quizAnswers[question.id])}
            onClick={handleSubmit}
          >
            Submit
          </S.Button>
        )}
      </S.ButtonsContainer>
    </S.Container>
  );
}

export default QuizQuestion;
