import React, { useState } from "react";

const SignUpPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = userDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    console.log("User Details:", userDetails);
    // Implement your sign-up logic here
  };

  // Placeholder functions for signing up with Google and GitHub
  const signUpWithGoogle = () => {
    console.log("Sign up with Google");
    // Implement Google sign-up logic here
  };

  const signUpWithGitHub = () => {
    console.log("Sign up with GitHub");
    // Implement GitHub sign-up logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-8 text-3xl font-bold text-gray-900">Sign Up</div>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          className="mb-4 w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className="mb-4 w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          className="mb-4 w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          className="mb-4 w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
          required
        />
        <button
          type="submit"
          className="mb-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
      <button
        onClick={signUpWithGoogle}
        className="mb-2 w-64 rounded-md bg-red-500 py-2 text-white hover:bg-red-700"
      >
        Sign up with Google
      </button>
      <button
        onClick={signUpWithGitHub}
        className="w-64 rounded-md bg-gray-900 py-2 text-white hover:bg-black"
      >
        Sign up with GitHub
      </button>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/signin" className="text-blue-500 hover:text-blue-700">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default SignUpPage;
