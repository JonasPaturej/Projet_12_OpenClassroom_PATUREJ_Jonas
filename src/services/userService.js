import api from "./api";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";

const USE_MOCK = false;

export async function getUserMainData(userId) {
  if (USE_MOCK) {
    return USER_MAIN_DATA.find((user) => user.id === Number(userId));
  }
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
}

export async function getUserActivity(userId) {
  if (USE_MOCK) {
    const userActivity = USER_ACTIVITY.find(
      (activity) => activity.userId === Number(userId),
    );
    return userActivity.sessions.map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }

  const response = await api.get(`/user/${userId}/activity`);
  const sessions = response.data.data.sessions;
  return sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
}

export async function getUserAverageSession(userId) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  if (USE_MOCK) {
    const userSessions = USER_AVERAGE_SESSIONS.find(
      (session) => session.userId === Number(userId),
    );
    return userSessions.sessions.map((session, index) => ({
      day: days[session.day - 1],
      sessionLength: session.sessionLength,
      index: index,
    }));
  }

  const response = await api.get(`/user/${userId}/average-sessions`);
  const sessions = response.data.data.sessions;
  return sessions.map((session, index) => ({
    day: days[session.day - 1],
    sessionLength: session.sessionLength,
    index: index,
  }));
}

export async function getUserPerformance(userId) {
  const labels = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  const desiredOrder = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Énergie",
    "Cardio",
  ];

  if (USE_MOCK) {
    const userPerformance = USER_PERFORMANCE.find(
      (performance) => performance.userId === Number(userId),
    );
    const formattedData = userPerformance.data.map((item) => ({
      kind: labels[userPerformance.kind[item.kind]],
      value: item.value,
    }));
    return formattedData.sort(
      (a, b) => desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind),
    );
  }

  const response = await api.get(`/user/${userId}/performance`);
  const performanceData = response.data.data.data;
  const kindData = response.data.data.kind;
  const formattedData = performanceData.map((item) => ({
    kind: labels[kindData[item.kind]],
    value: item.value,
  }));
  return formattedData.sort(
    (a, b) => desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind),
  );
}
