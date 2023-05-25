import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ singleToy }) => {
  // console.log(singleToy);
  const { sellerName, toyName, price, category, availableQuantity,_id } = singleToy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <th>
        <Link to={`/toys/${_id}`}>
          <button className="btn btn-ghost text-xl">
            <FaInfoCircle />
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyCard;
