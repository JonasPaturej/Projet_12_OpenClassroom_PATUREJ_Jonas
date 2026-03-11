import api from "./api";

export async function getUserMainData(userId) {
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
}
