import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserMainData, getUserActivity, /*getUserAverageSession, getUserPerformance*/  } from "../services/userService"
import UserBloc from "../components/UserBloc/UserBloc";
import NutritionCard from "../components/Card/NutritionCard";
import SimpleBarChart from "../components/Chart/ActivityChart";

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  //const [sessions, setSessions] = useState(null);
  //const [performance, setPerformance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUserMainData(id);
        const activityData = await getUserActivity(id);
        setUser(userData);
        setActivity(activityData);
      } catch (error) {
        console.error("Erreur lors de la récupération utilisateur :", error);
      }
    }

    fetchData();
  }, [id]);

  if(!user || !activity) {
    return <p>Chargement...</p>;
  }

  console.log("data dans dashboard:", activity);

  return (
    <main>
      <div>
        <UserBloc firstName={user.userInfos.firstName} />
      </div>

      <div>
        <NutritionCard label="Calories" value={user.keyData.calorieCount} unit="kCal" />
      </div>
      <div>
        <NutritionCard label="Proteines" value={user.keyData.proteinCount} unit="g" />
      </div>
      <div>
        <NutritionCard label="Glucides" value={user.keyData.carbohydrateCount} unit="g" />
      </div>
      <div>
        <NutritionCard label="Lipides" value={user.keyData.lipidCount} unit="g" />
      </div>

      <div>
        <SimpleBarChart data={activity}/>
      </div>
    </main>
  );
}

export default Dashboard