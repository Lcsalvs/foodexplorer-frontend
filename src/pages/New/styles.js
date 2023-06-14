import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* width: 1120px; */
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  > header {
    margin-top: 24px;
    margin-bottom: 32px;
    margin-left: 122px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #e1e1e6;

      span {
        font-size: 24px;
        font-weight: 700;
      }

      svg {
        width: 32px;
        height: 32px;
      }
    }

    h1 {
      font-size: 32px;
      color: #e1e1e6;
    }
  }

  .img-name-cat {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-bottom: 32px;
  }

  .ingre-price {
    display: flex;
    gap: 32px;
  }

  .div-img {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    span {
      align-self: flex-start;
      color: #c4c4cc;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 16px;
    color: #c4c4cc;

    width: 100%;
    height: 80px;
  }

  .category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    color: #c4c4cc;

    width: 100%;

    > select {
      width: 100%;
      padding: 16px;

      background-color: #0d1d25;
      color: #c4c4cc;

      border-radius: 8px;
      border: none;

      > option {
        background-color: #000a0f;
        font-size: 16px;
      }
    }
  }

  .ingredients {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    color: #c4c4cc;

    > .ingredients-tags {
      background-color: #0d1d25;
      width: 100%;
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 32px;
    }
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;

    color: #c4c4cc;
  }

  .inputs {
    margin: 32px 125px 0 123px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #c4c4cc;

    margin-bottom: 32px;
  }

  .button {
    width: 172px;
    height: 48px;

    background-color: #ab4d55;
    border-radius: 5px;
    align-self: flex-end;
    margin-bottom: 116px;
  }

  .inputImage {
    width: 229px;
    height: 45px;
    margin-top: 8px;

    background-color: #0d1d25;

    display: flex;
    justify-items: center;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;

    label {
      /* z-index: 2;
      position: absolute; */
      padding: 20px 20px;
      display: flex;
      align-items: center;
      /* width: max-content; */

      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      cursor: pointer;
    }

    label > p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    svg {
      margin-right: 20px;
      transform: rotate(-90deg);
    }

    .input-img {
      display: none;
    }

    border-radius: 5px;
  }

  .buttons {
    display: flex;
    gap: 32px;
    justify-content: flex-end;
    margin-bottom: 116px;
  }

  .button-del {
    width: 135px;
    height: 48px;

    background: #0d161b;
    border-radius: 5px;
  }

  @media (max-width: 1300px) {
    .inputs > div {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    }
  }
`;
