import { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AdminLogin = () => {
  const { signIn, googleSignIn, facebookLogin } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        toast.success("Successfully Login");

        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        toast.error("Login Error");
      });
    navigate(from);
  };

  // const handleSocialSignIn = (socialProvider) => {
  //   socialProvider().then((result) => {
  //     if (result.user) {
  //       navigate(from);
  //       console.log(result.user);
  //     }
  //   });
  // };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-base-200 flex">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="p-3">
              Do not have an account?{" "}
              <Link to="/adminRegisters" className="btn-link">
                Register
              </Link>
            </p>
            <div className="p-2">
              <div>
                <h2 className="divider text-center">Or sign in with</h2>
                {/* <div className="text-center space-x-6 p-3 rounded-md">
                  <button
                    onClick={() => handleSocialSignIn(googleSignIn)}
                    className="text-4xl"
                  >
                    <FcGoogle />
                  </button>
                  <button
                    onClick={() => handleSocialSignIn(facebookLogin)}
                    className="text-4xl text-[#0066ff]"
                  >
                    <FaFacebook />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AdminLogin;
