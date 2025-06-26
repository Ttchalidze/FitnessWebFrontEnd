import axiosClient from "./index";

// fucntion to get all workouts
export const getWorkouts = async () => {
  try {
    const response = await axiosClient.get("/workouts");
    return response.data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    throw new Error("Failed to fetch workouts");
  }
};

// function to get workouts by ID
export const getWorkoutsById = async (id) => {
  try {
    const response = await axiosClient.get(`/workouts/${id}`);
    return response.data;
  } catch (error) {
    console.error("error Fetching Workouts by ID", error);
    throw new Error("failde to fetch workouts by ID");
  }
};

// function to get workouts by user ID
export const getWorkoutsByUserId = async (token) => {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`/myworkouts`, config);
    return response.data;
  } catch (error) {
    console.error("error fetching workouts by user ID", error);
    throw new Error("failed to fetch workouts by user ID");
  }
};

// funtion to add workout
export const addWorkout = async (id, token) => {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(
      `/myworkouts`,
      { workout_id: id },
      config
    );
    return response.data;
  } catch (error) {
    console.error("error adding workout", error);
    throw new Error("failed to add workout");
  }
};

//funtion to delete workout
export const deleteWorkout = async (id, token) => {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.delete(`/myworkouts/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("error deleting workout", error);
    throw new Error("Failed to delete workout");
  }
};
