import api from "./api";

export async function getUserMainData(userId) {
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
}

export async function getUserActivity(userId) {
  const response = await api.get(`/user/${userId}/activity`);
  const sessions = response.data.data.sessions;
  return sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
}

export async function getUserAverageSession(userId) {
  const response = await api.get(`/user/${userId}/average-sessions`);
  const sessions = response.data.data.sessions;

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  return sessions.map((session) => ({
    day: days[session.day - 1],
    sessionLength: session.sessionLength,
  }));
}

export async function getUserPerformance(userId) {
  const response = await api.get(`/user/${userId}/performance`);
  const performanceData = response.data.data.data;
  const kindData = response.data.data.kind;

  const labels = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const formattedData = performanceData.map((item) => ({
    kind: labels[kindData[item.kind]],
    value: item.value,
  }));

  const desiredOrder = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Énergie",
    "Cardio",
  ];

  return formattedData.sort(
    (a, b) => desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind),
  );
}
