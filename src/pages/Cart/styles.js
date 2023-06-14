import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .header {
    margin-top: 24px;
    margin-left: 122px;

    a {
      color: #e1e1e6;
      display: flex;
      gap: 5px;
      align-items: center;

      span {
        font-size: 24px;
        font-weight: 700;
      }

      svg {
        width: 32px;
        height: 32px;
      }
    }
  }

  .details {
    display: flex;
    gap: 48px;

    align-items: center;

    margin: 100px 123px 200px 122px;

    > img {
      width: 390px;
      height: 390px;
    }

    .description {
      display: flex;
      gap: 24px;
      flex-direction: column;
    }

    h1 {
      font-size: 40px;
      line-height: 56px;
      font-weight: 500;
      color: #e1e1e6;
    }

    p {
      font-size: 24px;
      line-height: 34px;
      color: #e1e1e6;
    }

    .ingredients {
      display: flex;
      gap: 12px;
      justify-content: center;
    }

    .button {
      width: 216px;
    }

    .purchase {
      display: flex;
      gap: 33px;

      margin-top: 48px;
    }
  }
`;
