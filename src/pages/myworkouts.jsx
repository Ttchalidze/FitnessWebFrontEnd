import { useState, useEffect } from "react";
import { deleteWorkout, getWorkoutsByUserId } from "../api/workout";
import { useAuth } from "../auth/AuthContext";
import "../styles/myworkouts.css";

const Myworkouts = () => {
  const { token } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState();
  const callWorkout = async () => {
    try {
      const result = await getWorkoutsByUserId(token);
      setWorkouts(result);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    if (token) {
      callWorkout();
    }
  }, [token]);

  const handleDeleteWorkout = async (id) => {
    try {
      await deleteWorkout(id, token);
      setWorkouts(workouts.filter((w) => w.id !== id));
      callWorkout();
    } catch (error) {
      console.error("Error deleting workout:", error);
      setError("Failed to delete workout.");
    }
  };

  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="my-workouts-page">
      <h1>My Saved Workouts</h1>
      {workouts && workouts.length > 0 ? (
        <div className="my-workouts-grid">
          {workouts.map((workout) => (
            <div key={workout.id} className="my-workout-card">
              <iframe
                className="my-workout-video"
                src={workout.video}
                title={workout.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="my-workout-content">
                <h2>{workout.title || "Workout"}</h2>
                <p>{workout.description}</p>
                <button
                  onClick={() => handleDeleteWorkout(workout.id)}
                  className="delete-workout-btn"
                >
                  Delete Workout
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-workouts-message">
          You haven`t added any workouts yet. Go to the{" "}
          <a href="/workouts">Workouts</a> page to add some!
        </p>
      )}
    </div>
  );
};

export default Myworkouts;
