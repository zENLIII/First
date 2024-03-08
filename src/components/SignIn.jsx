import React, { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Placeholder functions for authentication
  const signInWithEmail = (e) => {
    e.preventDefault();
    console.log("Signing in with email:", email, "and password:", password);
    // Authentication logic for signing in with email and password will go here
  };

  const signInWithGoogle = () => {
    console.log("Sign in with Google");
    // Authentication logic for signing in with Google will go here
  };

  const signInWithGitHub = () => {
    console.log("Sign in with GitHub");
    // Authentication logic for signing in with GitHub will go here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-8 text-3xl font-bold text-gray-900">Sign In</div>
      <form onSubmit={signInWithEmail} className="w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
        />
        <button
          type="submit"
          className="mb-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-700"
        >
          Sign In with Email
        </button>
      </form>
      <button
        onClick={signInWithGoogle}
        className="flex items-center justify-center w-64 mb-4 rounded-lg bg-red-500 py-2 px-4 text-white hover:bg-red-600 transition duration-150 ease-in-out"
      >
        {/* Google icon and text */}
        Sign in with Google
      </button>
      <button
        onClick={signInWithGitHub}
        className="flex items-center justify-center w-64 mb-4 rounded-lg bg-gray-900 py-2 px-4 text-white hover:bg-black transition duration-150 ease-in-out"
      >
        {/* GitHub icon and text */}
        Sign in with GitHub
      </button>
      <p className="mt-4">
        Not signed up yet?{" "}
        <a href="/signup" className="text-blue-500 hover:text-blue-700">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignInPage;
