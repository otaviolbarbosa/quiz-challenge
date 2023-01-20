import { useEffect, useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import axios from "axios";
import env from "react-dotenv";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Quiz from "./components/QuizQuestion";
import Loading from "./components/Loading";

import "./App.css";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { IQuiz, IQuizQuestion } from "./types";
import { setQuiz } from "./redux/quizSlice";

function App() {
  const [filteredQuestions, setFilteredQuestions] = useState<IQuizQuestion[]>();
  const [loading, setLoading] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const { quiz, quizAnswers } = useSelector(
    ({ quizReducer }: RootState) => quizReducer
  );

  const dispatch = useDispatch();

  const handleClickPrevious = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleClickNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  useEffect(() => {
    setFilteredQuestions(
      quiz?.quizQuestion.filter(
        (question) =>
          !question.skipConditions?.find(
            (condition) =>
              quizAnswers && quizAnswers[condition.slug] === condition.value
          )
      )
    );
  }, [quiz, quizAnswers]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const allergiesData = await axios.get(env.API_URL);
      dispatch(setQuiz(allergiesData?.data?.data as IQuiz));
      setLoading(false);
    })();
  }, [dispatch]);

  return (
    <S.Container>
      <S.AppTitle>{quiz ? quiz.title : "Quiz App"}</S.AppTitle>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          ref={swiperRef}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination]}
          className="mySwiper"
          allowTouchMove={false}
          style={{ height: "100%", margin: "auto 0" }}
        >
          {filteredQuestions?.map((question, index) => (
            <SwiperSlide key={`key-question-${question.id}`}>
              <Quiz
                question={question}
                onPrevious={handleClickPrevious}
                onNext={handleClickNext}
                isfirstQuestion={index === 0}
                isLastQuestion={filteredQuestions?.length === index + 1}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <S.ThankYouContainer>Thank you! 🙂</S.ThankYouContainer>
          </SwiperSlide>
        </Swiper>
      )}
    </S.Container>
  );
}

export default App;
