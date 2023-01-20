import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

interface QuizOptionProps {
  readonly active: boolean;
}
export const Container = styled.a<QuizOptionProps>`
  display: flex;
  align-items: center;
  margin-top: 8px;
  border: ${({ active }) =>
    active ? "1px solid #ffffff" : "1px solid #ffffff99"};
  border-radius: 4px;
  background-color: #ffffff1a;
  padding: 8px;
`;

export const Letter = styled.span<QuizOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border: ${({ active }) =>
    active ? "1px solid #ffffff" : "1px solid #ffffff99"};
  border-radius: 4px;
  color: ${({ active }) => (active ? "#1e2b45" : "#fff")};
  background-color: ${({ active }) => (active ? "#fff" : "#1e2b45")};
`;

export const Label = styled.span<QuizOptionProps>`
  display: flex;
  flex: 1;
  color: #fff;
  padding: 0 10px;
  font-size: 20px;
  line-height: 28px;
`;

export const CheckIcon = styled(FaCheck).attrs({
  color: "#fff",
})`
  padding: 0 8px;
`;
