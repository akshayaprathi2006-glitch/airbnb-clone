import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Log in to your Airbnb account
        </p>

        <form className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500"/>
          </div>

          <button
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>

        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="flex-1 border-t"></div>
        </div>

        <button
          className="w-full border py-3 rounded-lg font-medium hover:bg-gray-100 transition" >
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-rose-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;