import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  padding: 0 150px;

  .div-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;

    > p {
      font-size: 42px;
      font-weight: bold;
    }
  }

  @media (max-width: 1279px) {
    flex-direction: column;

    .form {
      background: none;
      margin: 0 auto;
    }

    .div-logo {
      margin-top: 158px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 476px;
  align-items: center;
  gap: 32px;
  justify-content: center;
  flex-direction: column;
  background-color: #001119;
  border-radius: 16px;

  padding: 64px;

  > h1 {
    font-size: 48px;
    color: #fff;
  }

  > a {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
  }

  > label {
    color: #c4c4cc;
    margin-bottom: -20px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    align-self: flex-start;
  }

  .button {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`;
