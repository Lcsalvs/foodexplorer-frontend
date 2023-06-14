import styled from "styled-components";

export const Container = styled.div`
  background-color: #750310;
  color: #fff;
  width: 100%;
  height: 48px;
  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  border-radius: 5px;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  opacity: ${({ disabled }) => (disabled ? "70%" : "100%")};

  > svg {
    margin-right: 8px;
  }
`;
