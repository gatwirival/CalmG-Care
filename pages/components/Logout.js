import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUserData, logout } from "../../appwrite";

function Logout() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData()
      .then((account) => setUser(account))
      .catch((error) => {
        if (router.pathname !== "/Register" && router.pathname !== "/") {
          router.push('/Login');
        }
      });
  }, []);

  const handleLogOut = () => {
    logout()
      .then(() => router.push('/Login'))
      .catch((error) => console.log("Logout error:", error));
  };

  if (!user && router.pathname !== "/Register" && router.pathname !== "/") {
    return <p>You aren&apos;t logged in.</p>

  }

  return (
    <div>
      {user && <p>Logged in as {user.email}</p>}
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}

export default Logout;