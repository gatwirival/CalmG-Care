import { useState } from "react";
import { register } from "../appwrite";
import Link from "next/link";
import Header from "./components/Header";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Email is required.");
      return;
    }

    if (!password) {
      alert("Password is required.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    register(email, password)
      .then((account) => {
        alert(`Successfully created account with ID: ${account.$id}`);
      })
      .catch((error) => {
        console.error(error);
        alert("A user with the same email exists.");
      });
  };

  return (
    <>
 <Header />
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-btn">
        Sign up
      </button>

      <Link href="/Login">
        Login
      </Link>
    </form>
    </>
  );
}
