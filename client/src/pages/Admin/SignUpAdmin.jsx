import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/adminContext";

const SignUpAdmin = () => {
  const { signUp, errors } = useContext(AdminContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(username, password);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 py-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Sign Up Admin</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-left"
                htmlFor="email"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text"
                type="text"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-sm font-bold mb-2 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-left">
              {errors ? (
                <ul className="text-red-500 list-none list-inside text-left">
                  {errors.map((err, i) => (
                    <li className="py-1 text-sm" key={i}>
                      - {err?.message}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-customColor mt-2 hover:bg-customColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign up now
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600">
            You have already an account?{" "}
            <Link
              to="/admin"
              className="text-customColor hover:text-bg-customColor"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpAdmin;
