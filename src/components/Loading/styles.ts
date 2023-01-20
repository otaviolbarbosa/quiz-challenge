import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

export const Spinner = styled.div.attrs({
  className: "loader",
})``;
