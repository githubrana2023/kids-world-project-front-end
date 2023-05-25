const HomePopularToys = () => {
  return (
    <>
      {/*
    =============================================================================
                            popular and best selling toys 
    =============================================================================
     */}
      <section className="flex items-center justify-between my-16">
        <div data-aos="fade-right" className="grid grid-cols-2 gap-5 flex-1">
          <div className="rounded-xl bg-orange-300 p-3">
            <img
              src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
              alt=""
            />
          </div>
          <div className="rounded-xl bg-orange-300 p-3">
            <img
              src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
              alt=""
            />
          </div>
          <div className="rounded-xl bg-orange-300 p-3">
            <img
              src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
              alt=""
            />
          </div>
          <div className="rounded-xl bg-orange-300 p-3">
            <img
              src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais"
              alt=""
            />
          </div>
        </div>
        <div className="flex-[2] ml-8">
          <h1 className="font-bold text-4xl">
            Our Best And Popular <br /> Selling Toys
          </h1>
          <div className="flex items-center justify-between max-w-[400px] my-5">
            <div className="text-center  ">
              <h3 className="text-4xl font-bold text-black">5.4M</h3>
              <p className="text-gray-600">Toys sells</p>
            </div>
            <div className="text-center  ">
              <h3 className="text-4xl font-bold text-black">1.3M</h3>
              <p className="text-gray-600">Active Viewers</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#6E7BFF] to-[#6e7affd4] px-4 py-3 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-[#6E7BFF] hover:to-[#6e7aff] hover:shadow-xl transition-all">
            See More
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePopularToys;
