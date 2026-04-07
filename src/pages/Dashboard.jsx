import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserMainData, getUserActivity, getUserAverageSession, getUserPerformance } from "../services/userService"
import UserBloc from "../components/UserBloc/UserBloc";
import NutritionCard from "../components/Card/NutritionCard";
import SimpleBarChart from "../components/Chart/SimpleBarChart";
import SimpleLineChart from "../components/Chart/SimpleLineChart";
import SimpleRadarChart from "../components/Chart/SimpleRadarChart";
import SimpleRadialChart from "../components/Chart/SimpleRadialChart";
import "./Dashboard.css";

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const[userData, activityData, sessionsData, performanceData] = 
        await Promise.all([
          getUserMainData(id),
          getUserActivity(id),
          getUserAverageSession(id),
          getUserPerformance(id),
        ]);
        setUser(userData);
        setActivity(activityData);
        setSessions(sessionsData);
        setPerformance(performanceData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Erreur de chargement des données");
      }
    }

    fetchData();
  }, [id]);

  if(error) {
    return <p className="error">Impossible de charger les données. Vérifiez que le backend est lancé.</p>
  }

  if(!user || !activity || !sessions || !performance) {
    return <p>Chargement...</p>;
  }

  const score = user.todayScore ?? user.score;

  return (
    <main className="dashboard">
      <section className="dashboard_header">
        <UserBloc firstName={user.userInfos.firstName} />
      </section>

      <section className="dashboard_content">
        <div className="dashboard_left">
          <div className="dashboard_activity">
            <SimpleBarChart data={activity} />
          </div>
          <div className="dashboard_bottom-charts">
            <div className="dashboard_chart-card dashboard_chart-card--red">
              <SimpleLineChart data={sessions} />
            </div>
            <div className="dashboard_chart-card dashboard_chart-card--dark">
              <SimpleRadarChart data={performance} />
            </div>
            <div className="dashboard_chart-card dashboard_chart-card--light">
              <SimpleRadialChart score={score} />
            </div>
          </div>
        </div>

        <aside className="dashboard_right">
          <NutritionCard label="Calories" value={user.keyData.calorieCount} unit="kCal" />
          <NutritionCard label="Proteines" value={user.keyData.proteinCount} unit="g" />
          <NutritionCard label="Glucides" value={user.keyData.carbohydrateCount} unit="g" />
          <NutritionCard label="Lipides" value={user.keyData.lipidCount} unit="g" />
        </aside>
      </section>  
    </main>
  );
}

export default Dashboard