import styled from "styled-components";

export const Container = styled.div`
  .cards {
    display: flex;
    justify-content: center;

    margin-top: 49px;
  }

  .home-img {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1020px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
