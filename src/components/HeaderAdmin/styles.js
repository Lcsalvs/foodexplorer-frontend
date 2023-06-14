import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #00111a;
  display: flex;
  align-items: center;
  gap: 32px;

  padding: 28px 123px;

  span {
    color: #82f3ff;
    font-size: 12px;
    align-self: flex-end;
  }

  .div-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    .logo {
      width: 180px;
    }
  }

  .button {
    width: 216px;
  }

  .signOut {
    > svg {
      color: #fff;
      width: 32px;
      height: 32px;
    }
  }
`;
