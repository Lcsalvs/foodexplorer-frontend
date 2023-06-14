import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #00111a;
  display: flex;
  align-items: center;
  gap: 32px;

  padding: 28px 123px;

  .div-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    cursor: pointer;
    .logo {
      /* height: 50px; */
      width: 200px;
    }
  }

  .button {
    width: 216px;
    height: 56px;
  }

  .signOut {
    > svg {
      color: #fff;
      width: 32px;
      height: 32px;
    }
  }
`;
