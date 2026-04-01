import api from "./api";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";

import UserActivityModel from "../models/UserActivityModel";
import UserAverageSession from "../models/UserAverageSession";
import UserPerformance from "../models/UserPerformance";
import UserMainData from "../models/UserMainData";

const USE_MOCK = true;

export async function getUserMainData(userId) {
  let user;

  if (USE_MOCK) {
    user = USER_MAIN_DATA.find((u) => u.id === Number(userId));
  } else {
    const response = await api.get(`/user/${userId}`);
    user = response.data.data;
  }

  return new UserMainData(user).format();
}

export async function getUserActivity(userId) {
  let sessions;

  if (USE_MOCK) {
    const userActivity = USER_ACTIVITY.find((a) => a.userId === Number(userId));
    sessions = userActivity.sessions;
  } else {
    const response = await api.get(`/user/${userId}/activity`);
    sessions = response.data.data.sessions;
  }

  return new UserActivityModel(sessions).format();
}

export async function getUserAverageSession(userId) {
  let sessions;

  if (USE_MOCK) {
    const userSessions = USER_AVERAGE_SESSIONS.find(
      (s) => s.userId === Number(userId),
    );
    sessions = userSessions.sessions;
  } else {
    const response = await api.get(`/user/${userId}/average-sessions`);
    sessions = response.data.data.sessions;
  }

  return new UserAverageSession(sessions).format();
}

export async function getUserPerformance(userId) {
  let performanceData;
  let kindData;

  if (USE_MOCK) {
    const userPerformance = USER_PERFORMANCE.find(
      (p) => p.userId === Number(userId),
    );
    performanceData = userPerformance.data;
    kindData = userPerformance.kind;
  } else {
    const response = await api.get(`/user/${userId}/performance`);
    performanceData = response.data.data.data;
    kindData = response.data.data.kind;
  }

  return new UserPerformance(performanceData, kindData).format();
}
