import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 80px;
`;

export const QuizQuestion = styled.div`
  font-family: "TitilliumWeb";
  color: #fff;
  padding: 10px 0;
  font-size: 24px;
  line-height: 32px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 160px; */
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  padding: 10px 20px;
  background-color: #5ac2d7;
  border: none;
  border-radius: 4px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const RightIcon = styled(FaChevronRight).attrs({
  color: "#fff",
})`
  padding-left: 8px;
`;
export const LeftIcon = styled(FaChevronLeft).attrs({
  color: "#fff",
})`
  padding-right: 8px;
`;
