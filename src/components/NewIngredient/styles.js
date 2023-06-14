import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;

  border-radius: 8px;

  background-color: ${({ theme, isNew }) =>
    isNew ? `transparent` : theme.COLORS.LIGHT_600};
  border: ${(isNew) => (isNew ? `1px dashed gray` : `none`)};

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-right: 16px;
  }

  .button-add {
    color: #7c7c8a;
  }

  .button-delete {
    color: #fff;
  }

  > input {
    height: 32px;
    width: 118px;
    padding: 16px;

    color: #fff;
    background: transparent;

    border: none;

    &::placeholder {
      color: #7c7c8a;
    }
  }
`;
