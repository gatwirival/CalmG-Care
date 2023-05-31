import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "../appwrite";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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

    login(email, password)
      .then((account) => {
        alert(`Successfully logged in from: ${account.osName}`);
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed. Please try again.");
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
        Log In
      </button>
      <Link href="/Register">
        Register
      </Link>
    </form>
    <Footer/>
    </>
  );
}
