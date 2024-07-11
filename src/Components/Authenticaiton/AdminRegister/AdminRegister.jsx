import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AdminRegister = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const age = form.get("age");
    const gender = form.get("gender");
    console.log(name, email, password, confirmPassword, age, gender);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

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

    toast.success("Successfully Registered");

    createUser(email, password, confirmPassword)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Error Signing Up.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Attendance || AdminRegister</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">User Register</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  placeholder="company name"
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
                  placeholder="mobile number"
                  className="input input-bordered"
                  name="mobileNumber"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
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
                  <span className="label-text">Full Address</span>
                </label>
                <input
                  type="text"
                  placeholder=" full address"
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
                  placeholder="Place size"
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
                  placeholder="capacity people"
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
                  placeholder="amount rate"
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
                  placeholder="your facebook link"
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
                  placeholder="contact number"
                  className="input input-bordered"
                  name="contactNumber"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="p-4">
              Have an Account?{" "}
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
