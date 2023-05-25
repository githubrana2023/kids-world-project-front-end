import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos'
import { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
const TrendingToy = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-full mt-16">
      <section className="grid md:grid-cols-2 gap-6 bg-white py-8 px-6 shadow-inner rounded-xl hover:shadow-lg">
        <div className="w-full flex items-center justify-between bg-gradient-to-b from-[#6E7BFF] to-[#6e7aff9b] p-5 rounded-xl">
          <div className="text-center">
            <h3 className=" text-sm md:text-lg text-white">Products</h3>
            <p className="text-white font-bold text-2xl md:text-4xl mt-3">
              3500
            </p>
          </div>
          <div className="text-center">
            <h3 className=" text-sm md:text-lg text-white">Customer</h3>
            <p className="text-white font-bold text-2xl md:text-4xl mt-3">
              35k+
            </p>
          </div>
          <div className="text-center">
            <h3 className=" text-sm md:text-lg text-white">Happy</h3>
            <p className="text-white font-bold text-2xl md:text-4xl mt-3">
              39k+
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center h-full gap-3">
            <div>
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
                className="w-32 rounded-full"
              />
            </div>
            <div className="">
              <h4 className="font-bold text-xl">Our Testimonial</h4>
              <p className="my-1 text-sm text-gray-400">
                Toy Shop deliver best of fantastic books and puzzles straight to
                your door
              </p>
              <p>{<Rating style={{ maxWidth: 120 }} value={4.5} readOnly />}</p>
            </div>
          </div>
        </div>
      </section>

      {/**
       * section 2
       */}

      <section className="mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl">Our Trending Toys</h2>
          <p className="mt-3 mb-8 w-full">
            Our Trending Toys ensures that customers can find the most
            sought-after toys of the moment. The store provides a dynamic and
            vibrant shopping experience, allowing visitors to immerse themselves
            in the current toy trends and discover new and exciting play options
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/**
           * *=============================================================
           * !                         card 1
           * *=============================================================
           */}

          <div className="card bg-base-100 shadow-inner hover:shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.freepik.com/free-vector/set-children-toy_1308-26575.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="text-center mt-auto">
                <button className="btn btn-circle bg-gradient-to-r from-[#6E7BFF] to-[#6e7affd4] font-semibold hover:bg-gradient-to-r hover:from-[#6E7BFF] hover:to-[#6e7aff] transition-all border-0 hover:translate-x-1">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/**
           * *=============================================================
           * !                         card 2
           * *=============================================================
           */}

          <div data-aos="fade-right" data-aos-offset="350" data-aos-easing="ease-in-sine" data-aos-duration="600" className="card bg-base-100 shadow-inner hover:shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.freepik.com/free-vector/set-children-toy_1308-26575.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="text-center mt-auto">
                <button className="btn btn-circle bg-gradient-to-r from-[#6E7BFF] to-[#6e7affd4] font-semibold hover:bg-gradient-to-r hover:from-[#6E7BFF] hover:to-[#6e7aff] transition-all border-0 hover:translate-x-1">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/**
           * *=============================================================
           * !                         card 3
           * *=============================================================
           */}

          <div data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600" className="card bg-base-100 shadow-inner hover:shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.freepik.com/free-vector/flat-design-christmas-gift-collection_23-2148723882.jpg?size=626&ext=jpg&ga=GA1.1.607451879.1674134985&semt=ais"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="text-center mt-auto">
                <button className="btn btn-circle bg-gradient-to-r from-[#6E7BFF] to-[#6e7affd4] font-semibold hover:bg-gradient-to-r hover:from-[#6E7BFF] hover:to-[#6e7aff] transition-all border-0 hover:translate-x-1">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/**
           * *=============================================================
           * !                         card 4
           * *=============================================================
           */}

          <div data-aos="fade-right" data-aos-offset="450" data-aos-easing="ease-in-sine" data-aos-duration="600" className="card bg-base-100 shadow-inner hover:shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.freepik.com/free-photo/childhood-cancer-awareness-month-background-concept_23-2149499375.jpg?size=626&ext=jpg&ga=GA1.1.607451879.1674134985&semt=ais"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="text-center mt-auto">
                <button className="btn btn-circle bg-gradient-to-r from-[#6E7BFF] to-[#6e7affd4] font-semibold hover:bg-gradient-to-r hover:from-[#6E7BFF] hover:to-[#6e7aff] transition-all border-0 hover:translate-x-1">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full text-center mt-6">
        <button className="bg-gradient-to-r from-[#6E7BFF] to-[#6e7affd4] px-4 py-3 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-[#6E7BFF] hover:to-[#6e7aff] hover:shadow-xl transition-all">
          See More
        </button>
      </div>
    </div>
  );
};

export default TrendingToy;
