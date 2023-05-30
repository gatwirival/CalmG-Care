import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUserData, logout } from "../appwrite";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData()
      .then((account) => setUser(account))
      .catch((error) => router.push('/login'));
  }, []);

  const handleLogOut = () => {
    logout()
      .then(() => router.push('/login'))
      .catch((error) => console.log("Logout error:", error));
  };

  if (!user) return <p>You aren't logged in.</p>;

  return (
    <div>
      <p>Logged in as {user.email}</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
