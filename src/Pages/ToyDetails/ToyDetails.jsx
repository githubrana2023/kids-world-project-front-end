import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Rating } from "@smastrom/react-rating";

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);

  return (
    <div className="md:px-8 mb-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kids World | Toy Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl mt-16">
        <figure>
          <img src={toy.photoUrl} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.toyName}</h2>
          <p>Seller Name : {toy.sellerName}</p>
          <p>Seller Email : {toy.sellerEmail}</p>
          <p>Price : ${toy.price}</p>

          <p>On Stock : {toy.availableQuantity}</p>
          <p>Description : {toy.description}</p>
          <p>
            {<Rating style={{ maxWidth: 120 }} value={toy.ratings} readOnly />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
