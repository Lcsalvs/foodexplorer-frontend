import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #0d1d25;

  border-radius: 10px;

  > input {
    height: 48px;
    width: 100%;
    padding: 16px;

    color: #fff;
    background: transparent;
    border: 0;

    &:placeholder {
      color: #7c7c8a;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px red;
      border-radius: 10px;
    }
  }

  svg {
    margin-left: 26px;
    color: #7c7c8a;
  }
`;
