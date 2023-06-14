import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */

  color: #E1E1E6;
  font-size: 20px;
  font-weight: 700;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .counter {
    display: flex;
    gap: 14px;
  }
`