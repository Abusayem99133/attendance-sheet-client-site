import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminRegister = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/adminDashboards";
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const companyName = form.get("companyName");
    const mobileNumber = form.get("mobileNumber");
    const email = form.get("email");
    const password = form.get("password");
    const fullAddress = form.get("fullAddress");
    const business = form.get("business");
    const place = form.get("place");
    const people = form.get("people");
    const amount = form.get("amount");
    const facebook = form.get("facebook");
    const contactNumber = form.get("contactNumber");
    console.log(
      companyName,
      mobileNumber,
      email,
      fullAddress,
      business,
      place,
      people,
      amount,
      facebook,
      contactNumber,
      password
    );

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters.");
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error(
        "Password should include both uppercase and lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("Successfully Registered");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Error Registering.");
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <Helmet>
        <title>Attendance || AdminRegister</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered"
                  name="companyName"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="input input-bordered"
                  name="mobileNumber"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Address"
                  className="input input-bordered"
                  name="fullAddress"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type of Business</span>
                </label>
                <input
                  type="text"
                  placeholder="Business"
                  className="input input-bordered"
                  name="business"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Place Size</span>
                </label>
                <input
                  type="text"
                  placeholder="Place Size"
                  className="input input-bordered"
                  name="place"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Capacity of People</span>
                </label>
                <input
                  type="text"
                  placeholder="Capacity People"
                  className="input input-bordered"
                  name="people"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount Rate</span>
                </label>
                <input
                  type="text"
                  placeholder="Amount Rate"
                  className="input input-bordered"
                  name="amount"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Facebook Page Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Facebook Link"
                  className="input input-bordered"
                  name="facebook"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Emergency Contact Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="input input-bordered"
                  name="contactNumber"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
                    placeholder="Password"
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-300">Register</button>
              </div>
            </form>
            <p className="p-4">
              Have an Account?{" "}
              <Link to="/adminLogins" className="btn-link">
                Login
              </Link>
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Admin Register</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default AdminRegister;
