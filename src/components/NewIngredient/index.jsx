import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NewIngredient({
  isNew,
  readOnly = false,
  value,
  onClick,
  ...rest
}) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter" && value?.length) {
            onClick();
          }
        }}
        {...rest}
      />

      {!readOnly && (
        <button
          type="button"
          onClick={onClick}
          className={isNew ? "button-add" : "button-delete"}
        >
          {isNew ? <FiPlus /> : <FiX />}
        </button>
      )}
    </Container>
  );
}
