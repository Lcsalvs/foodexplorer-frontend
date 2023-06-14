import styled from "styled-components";

export const Container = styled.div`
  width: 304px;
  height: 512px;

  display: flex;
  margin-right: 27px;
  margin-bottom: 48px;
  align-items: center;

  padding: 24px 48px;
  margin-top: 23px;

  border-radius: 8px;

  background-color: #000204;

  .favorite {
    align-self: flex-end;
    margin-top: -16px;
    margin-right: -16px;

    border: none;
    background-color: transparent;
    color: #fff;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 304px;
  }

  .name {
    font-size: 24px;
    text-align: center;
    line-height: 34px;
    font-weight: 700;
    color: #e1e1e6;
    margin-bottom: 15px;
  }

  img {
    width: 176px;
    height: 176px;
    margin-bottom: 15px;

    cursor: pointer;
  }

  img:hover {
    opacity: 0.9;
  }

  h3 {
    font-size: 24px;
    text-align: center;
    line-height: 34px;
    font-weight: 700;
    color: #e1e1e6;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #c4c4cc;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .price {
    font-size: 32px;
    line-height: 51px;
    text-align: center;
    color: #82f3ff;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .div-count {
    display: flex;
    gap: 16px;
  }
`;
