import axios from "axios";
import { IPostActivity } from "../Types/Activity";

const BASE_URL =
  "https://todo.api.devcode.gethired.id/activity-groups?email=bayustrio7@gmail.com";
const DELETE_URL = "https://todo.api.devcode.gethired.id/activity-groups/";

const POST_URL =
  "https://todo.api.devcode.gethired.id/activity-groups?email=bayustrio7@gmail.com";

export const getActivityAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const initialData = {
  title: "New Activity",
  email: "bayustrio7@gmail.com",
};

export const postActivityAPI = async (data: IPostActivity = initialData) => {
  const response = await axios.post(POST_URL, data);

  return response.data;
};

export const deleteActivityAPI = async (id: number) => {
  const response = await axios.delete(`${DELETE_URL}${id}`);

  return response.data;
};
