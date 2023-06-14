import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  
  .section {
    padding-bottom: 0px;
    margin-bottom: 0px;

    span {
      color: #e1e1e6;

      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
    }
  }

  .carousel {
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
    width: 1118px;

    flex-direction: row;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .buttons {
    width: 1180px;

    display: flex;
    justify-content: space-between;

    position: absolute;
    border: 0;

    cursor: pointer;
  }

  .left {
    position: absolute;
    left: -20px;
    width: 116px;
    height: 415px;
    border: none;
    top: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-top: 39.5px;

    > svg {
      margin-top: 190px;
      margin-left: 72px;
    }
  }

  .right {
    position: absolute;
    right: 0;
    width: 116px;
    height: 448px;
    border: none;
    top: 0px;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    margin-top: 39.5px;

    > svg {
      margin-top: 190px;
      margin-left: 72px;
    }
  }

  @media (max-width: 440px) {
    height: 100%;
    width: 390px;

    .section {
      font-size: 18px;

      > span {
        margin-left: 15px;
      }
    }

    .carousel {
      width: 385px;
    }

    .buttons {
      width: 385px;
    }

    .left {
      position: absolute;
      left: -5px;
      width: 50px;
      height: 160px;
      border: none;
      top: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.272541) 0%,
        #000a0f 100%
      );
      transform: matrix(-1, 0, 0, 1, 0, 0);
      margin-top: 59.5px;

      > svg {
        margin-top: 70px;
        margin-left: 20px;
      }
    }
    .right {
      position: absolute;
      right: 0;
      width: 50px;
      height: 160px;
      border: none;
      top: 0px;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.272541) 0%,
        #000a0f 100%
      );
      margin-top: 59.5px;

      > svg {
        margin-top: 70px;
        margin-left: 32px;
      }
    }
  }
`;
