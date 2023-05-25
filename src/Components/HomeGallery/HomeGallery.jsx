import { useEffect, useState } from "react";

const HomeGallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`https://back-end-assignment-11.vercel.app/toys?limit=20`)
      .then((response) => response.json())
      .then((responseData) => setImages(responseData))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h1 className="font-bold text-5xl">Our Toys Gallery</h1>
        <p className="mt-4">
          Our Toys Gallery is committed to providing high-quality and
          imaginative playthings that spark creativity and joy. The store
          creates a delightful and welcoming atmosphere, inviting children and
          their families to explore and discover the wonders of play.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-6 ">
        {images.map((img) => (
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            key={img._id}
            className="p-3 bg-white shadow-xl rounded-lg"
          >
            <img src={img.photoUrl} className="h-full rounded-lg" />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeGallery;
