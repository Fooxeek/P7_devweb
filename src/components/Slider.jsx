import { useState } from "react";
import left from "../assets/img/vector-left.svg";
import right from "../assets/img/vector-right.svg";

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="carrousel-container">
      <div className="arrow">
        {length > 1 && (
          <img
            src={left}
            alt="gauche"
            onClick={prevSlide}
            className={`leftArrow ${current === 0 ? "disabled" : "prev"}`}
          />
        )}
        {length > 1 && (
          <img
            src={right}
            alt="droite"
            onClick={nextSlide}
            className={`rightArrow ${current === length - 1 ? "disabled" : "next"}`}
          />
        )}
      </div>
      <div className="imgs">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              current === index
                ? "slider bl-msk wh-msk active-anim"
                : "slider bl-msk wh-msk"
            }
          >
            {index === current && <img src={slide} alt="appartement à louer" />}
            {index === current && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
