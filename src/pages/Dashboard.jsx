import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserMainData, getUserActivity, getUserAverageSession, getUserPerformance } from "../services/userService"
import UserBloc from "../components/UserBloc/UserBloc";
import NutritionCard from "../components/Card/NutritionCard";
import SimpleBarChart from "../components/Chart/ActivityChart";
import SimpleLineChart from "../components/Chart/AverageSessionChart";
import SimpleRadarChart from "../components/Chart/PerformanceChart";
import SimpleRadialChart from "../components/Chart/ScoreChart";
import "./Dashboard.css";

function Dashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUserMainData(id);
        const activityData = await getUserActivity(id);
        const sessionsData = await getUserAverageSession(id);
        const performanceData = await getUserPerformance(id);
        setUser(userData);
        setActivity(activityData);
        setSessions(sessionsData);
        setPerformance(performanceData);
      } catch (error) {
        console.error("Erreur lors de la récupération utilisateur :", error);
      }
    }

    fetchData();
  }, [id]);

  if(!user || !activity || !sessions || !performance) {
    return <p>Chargement...</p>;
  }

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
              <SimpleRadialChart score={user.todayScore || user.score} />
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