import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../Firebase/config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const RegisterPage = () => {
  const {
    registerWithEmailPassword,
    setUser,
    logOut,
    loginWithGoogle,
    loginWithGithub,
  } = useContext(AuthContext);
  const [errorMessage,setErrorMessage] =useState('')

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;

    if (!email) {
      // return console.log("email is required");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email is required",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!password) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password is required",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!displayName) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name is required",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else if (!photoURL) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Photo Url is required",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }


    registerWithEmailPassword(email, password)
      .then((result) => {
        setErrorMessage('')
        setUser(result.user);
        updateProfile(auth.currentUser, { displayName, photoURL })
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error.message);
          });
        logOut();
        navigate("/login");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Kids World | Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 md:w-[450px] w-full">
          <form onSubmit={handleRegister} className="card-body  ">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <BiHide /> : <BiShow />}
                  </span>
                </label>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phot URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  Already have an account ?
                  <Link to="/login" className="label underline">
                    Login
                  </Link>
                </label>
                <label className="label text-error">
                  {errorMessage?errorMessage:''}
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="divider">OR</div>
              <div className="flex justify-evenly h-20 rounded-box items-center ">
                <div
                  className="btn btn-circle btn-outline"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle />
                </div>
                <div
                  className="btn btn-circle btn-outline"
                  onClick={handleGithubLogin}
                >
                  <FaGithub className="text-xl" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
