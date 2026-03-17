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
  const response = await api.get(`/user/${userId}/averagesession`);
  return response.data.data;
}

export async function getUserPerformance(userId) {
  const response = await api.get(`/user/${userId}/performance`);
  return response.data.data;
}
