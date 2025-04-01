import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-green-600">
          Sign Up To Pingme App
        </h1>
        <form className="">
          <div className="">
            <label htmlFor="fullName" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              id="fullName"
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter your full name..."
            />
          </div>
          <div className="">
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              id="username"
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter Username..."
            />
          </div>
          <div className="">
            <label htmlFor="password" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <span className="">
              <input
                id="password"
                type="password"
                className="w-full input input-bordered h-10"
                placeholder="Enter Password"
              />
            </span>
          </div>
          <div className="">
            <label htmlFor="confirmPassword" className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <span className="">
              <input
                id="confirmPassword"
                type="password"
                className="w-full input input-bordered h-10"
                placeholder="Confirm Password"
              />
            </span>
          </div>
          {/* Gender checkbox here */}
          <GenderCheckBox />
          <div className="">
            <a
              to={"#"}
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </a>
          </div>
          <div className="">
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
