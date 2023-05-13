import { useState } from "react";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import arrowLeft from "./icons/arrow-left.svg";
import arrowRight from "./icons/arrowslim-right.svg";
import "./carousel.css";
// import Button from "../../UI/Button/Button";
import Button from "@mui/material/Button";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img3, img2, img1];

  function plusItem() {
    currentIndex < images.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  }

  // setInterval(() => {
  //   plusItem();
  // }, 5000);

  function minusItem() {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(images.length - 1);
  }

  return (
    <>
      <div className="container">
        <a className="prev" onClick={minusItem}>
          <img src={arrowLeft} alt="Previous" />
        </a>

        {images.map((image, index) => (
          <div
            key={index}
            className="item fade"
            style={{
              display: currentIndex === index ? "block" : "none",
            }}
          >
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
        ))}

        <a className="next" onClick={plusItem}>
          <img src={arrowRight} alt="Next" />
        </a>
      </div>
      <div className="wrap ">
        <div className="contenedor-superpuesto ">
          <h2 className="text-big no-margin">Los mas vendidos de octubre</h2>
          <h4>Consigue ahora los mejores productos de MyRelevant Store</h4>

          <Button
            color="primary"
            sx={{
              textTransform: "none",
              p: "12px 32px",
              borderRadius: 4,
              fontSize: 18,
            }}
            variant="contained"
          >
            Ver ofertas de repuestos
          </Button>

          {/* <Button
            text={"Ver ofertas de repuestos"}
            estilo={"btn w-auto"}
          ></Button> */}
        </div>
      </div>
    </>
  );
};

export default Carousel;
