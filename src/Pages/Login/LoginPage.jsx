import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const LoginPage = () => {
  const { loginWithEmailPassword, setUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  const redirectTo = location?.state?.from?.pathname || '/'

  console.log(redirectTo);

  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
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
    }
    setErrorMessage('')


    loginWithEmailPassword(email, password)
      .then((result) => {
        setUser(result.user);

        navigate(redirectTo);
      })
      .catch((err) => setErrorMessage(err.message));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        setErrorMessage('')
        setUser(res.user);
        navigate(redirectTo);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => {
        setErrorMessage('')
        setUser(res.user);
        navigate(redirectTo);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Kids World | Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 md:w-[450px] w-full">
            <div className="flex flex-col w-full border-opacity-50">
              <form onSubmit={handleLogin} className="card-body  ">
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

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label text-error">
                    {errorMessage?errorMessage:''}
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Log in</button>
                </div>
                <label className="label">
                  Don`t have an account ?
                  <Link to="/register" className="label underline">
                    Register
                  </Link>
                </label>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
