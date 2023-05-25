import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysTable = ({ toy,handleDelete }) => {
  const {
    sellerName,
    toyName,
    price,
    category,
    availableQuantity,
    photoUrl,
    sellerEmail,
    ratings,
    description,
    _id,
  } = toy;


  

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoUrl} />
            </div>
          </div>
        </div>
      </td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>{ratings}</td>
      <td>{description}</td>
      <td>
        <Link to={`/toys/update/${_id}`}>
          <button className="btn btn-ghost text-xl">
            <FaEdit />
          </button>
        </Link>
      </td>
      <th>
        <button className="btn btn-ghost text-xl" onClick={()=>handleDelete(_id)}>
          <FaTrashAlt />
        </button>
      </th>
    </tr>
  );
};

export default MyToysTable;
