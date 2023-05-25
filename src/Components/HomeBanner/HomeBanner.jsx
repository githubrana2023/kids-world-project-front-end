import AOS from "aos";
import { useEffect } from "react";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="zoom-in" className="carousel w-full md:h-[75vh] mt-8">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-vector/collection-toys-white-background_1308-2403.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
