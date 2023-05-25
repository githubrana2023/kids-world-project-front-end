import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

const HomeCategoryCard = ({ toy }) => {
  const { photoUrl, price, toyName, ratings, _id } = toy;
  return (
    <>
      <div className="card glass">
        <figure>
          <img
            src={photoUrl}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>Price : ${price}</p>
          {
            <Rating
            style={{ maxWidth: 120 }}
            value={ratings}
            readOnly
          />
          }
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>

    </>
  );
};

export default HomeCategoryCard;
