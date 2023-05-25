import { useState } from "react";
import ToyCard from "../../Components/AllToyComp/ToyCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllToysPage = () => {
  const loadedToys = useLoaderData();
  const [allToys, setAllToys] = useState(loadedToys);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.search.value;
    console.log(keyword);

    fetch(
      `https://back-end-assignment-11.vercel.app/my-toys/search?keyword=${keyword}`
    )
      .then((response) => response.json())
      .then((responseData) => setAllToys(responseData))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="overflow-x-auto w-full my-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kids World | All Toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex  items-center justify-between">
        <form onSubmit={handleSearch} className="flex  items-center">
          <input
            type="text"
            name="search"
            placeholder="Search by Toy Name"
            className="input input-bordered mr-5 w-full max-w-xs"
          />
          <button className="btn">search</button>
        </form>
      </div>

      <table className="table w-full mt-6">
        {/* head */}
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allToys.map((toy) => (
            <ToyCard key={toy._id} singleToy={toy} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AllToysPage;
