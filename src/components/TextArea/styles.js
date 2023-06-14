import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: #0d161b;
  color: #fff;

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: #7c7c8a;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px red;
    border-radius: 10px;
  }
`;
