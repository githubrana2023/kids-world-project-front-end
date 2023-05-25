import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "../../Components/MyToysTable/MyToysTable";
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
const MyToysPage = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loadings, setLoading] = useState(true);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://back-end-assignment-11.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((responseData) => {
            if (responseData.deletedCount) {
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  useEffect(() => {
    const loadMyToys = async () => {
      const response = await fetch(
        `https://back-end-assignment-11.vercel.app/my-toys?sellerEmail=${user?.email}`
      );
      const responseData = await response.json();
      setMyToys(responseData);
      setLoading(!loadings);
    };

    loadMyToys();
  }, [user?.email]);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://back-end-assignment-11.vercel.app/toys?sort=${data.sort}`)
      .then((response) => response.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <div className="overflow-x-auto w-full ">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Kids World | My Toys</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="flex items-center justify-end mb-6">
      <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-end gap-5"
            >
              <div>
                <label className="label">
                  <span className="label-text">Sort by Price</span>
                </label>
                <select
                  {...register("sort")}
                  className="select select-bordered"
                >
                  <option value="-1">High - Low</option>
                  <option value="1">Low - High</option>
                </select>
              </div>
              <input type="submit" value="Apply" className="btn btn-primary" />
            </form>
      </div>
      {loadings ? (
        <Spinner />
      ) : (
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Ratings</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((toy) => (
              <MyToysTable
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Ratings</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Details</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default MyToysPage;
