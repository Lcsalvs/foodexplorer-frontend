import { useRef } from "react";
import { Container } from "./styles";
import { IoChevronForwardOutline } from "react-icons/io5";

export function Section({ name, children }) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <div className="section">
        <span>{name}</span>
        <div className="buttons">
          <div className="left" onClick={handleLeftClick}>
            <IoChevronForwardOutline />
          </div>
          <div className="right" onClick={handleRightClick}>
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
      <div className="carousel" ref={carousel}>
        {children}
      </div>
    </Container>
  );
}
