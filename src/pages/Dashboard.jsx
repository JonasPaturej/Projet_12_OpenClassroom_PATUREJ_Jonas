import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserMainData } from "../services/userService"

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
        const data = await getUserMainData(id);
        setUser(data);
    }

    fetchUser();
  }, [id]);

  if(!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
        <h1>Bonjour {user.userInfos.firstName}</h1>
    </div>
  );
}

export default Dashboard