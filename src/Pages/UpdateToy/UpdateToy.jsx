import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const toy = useLoaderData();
  const {
    toyName,
    price,
    availableQuantity,
    photoUrl,
    ratings,
    description,
    _id,
  } = toy;
  // console.log(_id);
  // const handleCategory = (event) => {
  //   setCategory(event.target.value);
  //   console.log(category);
  // };

  // const handleAddToy = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const toyName = form.toyName.value;
  //   const price = form.price.value;
  //   const ratings = form.ratings.value;
  //   const availableQuantity = form.availableQuantity.value;
  //   const photoUrl = form.photoUrl.value;
  //   const description = form.description.value;

  const url = `https://back-end-assignment-11.vercel.app/toys/${_id}`;

  //   console.log(category);
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       toyName,
  //       price,
  //       ratings,
  //       category,
  //       availableQuantity,
  //       photoUrl,
  //       description,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount || data.matchedCount) {
  //         toast.success("Toy Updated successfully");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,e) => {
    const {
      toyName,
      price,
      ratings,
      category,
      availableQuantity,
      photoUrl,
      description,
    } = data;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        toyName,
        price,
        ratings,
        category,
        availableQuantity,
        photoUrl,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount || data.matchedCount) {
          toast.success("Toy Updated successfully");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kids World | Update Toy</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Update Your Toy Info</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 md:w-[950px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body grid grid-cols-12 w-full"
          >
            <div className="form-control col-start-1 col-end-6">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("sellerEmail", { required: true })}
                type="text"
                name="sellerEmail"
                placeholder="email"
                defaultValue={user?.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control col-start-6 col-end-11">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                {...register("sellerName", { required: true })}
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control col-start-11 col-end-13">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-start-1 col-end-11">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                {...register("toyName", { required: true })}
                type="text"
                name="toyName"
                defaultValue={toyName}
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-start-11 col-end-13">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                {...register("ratings", { required: true })}
                type="text"
                name="ratings"
                defaultValue={ratings}
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>

            <div className="form-control col-start-1 col-end-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                {...register("availableQuantity", { required: true })}
                type="text"
                name="availableQuantity"
                defaultValue={availableQuantity}
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-start-4 col-end-7">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>

              <select
                {...register("category")}
                className="select select-bordered"
              >
                <option value="teddy bear">Teddy Bear</option>
                <option value="horse">Horse</option>
                <option value="dinosaur">Dinosaur</option>
              </select>
            </div>
            <div className="form-control col-start-7 col-end-13">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                {...register("photoUrl", { required: true })}
                type="url"
                name="photoUrl"
                defaultValue={photoUrl}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-start-1 col-end-13 ">
              <label className="label">
                <span className="label-text">Toy Description</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                defaultValue={description}
                name="description"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>

            <div className="form-control mt-6 col-start-12">
              <input type="submit" value="Update" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
