import { useState, useEffect } from "react";
import { deleteWorkout, getWorkoutsByUserId } from "../api/workout";
import { useAuth } from "../auth/AuthContext";

const Myworkouts = () => {
  const { token } = useAuth();
  const [workouts, setWorkouts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (token) {
      const callWorkout = async () => {
        try {
          const result = await getWorkoutsByUserId(token);
          setWorkouts(result);
        } catch (err) {
          setError(err.message);
        }
      };
      callWorkout();
    }
  }, [token]);

  const handleDeleteWorkout = async (id) => {
    try {
      await deleteWorkout(id, token);
      setWorkouts(workouts.filter((w) => w.id !== id));
    } catch (error) {
      console.error("Error deleting workout:", error);
      setError("Failed to delete workout.");
    }
  };

  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div>
      <div>
        {workouts?.video ? (
          <div>
            <h2>chest workout</h2>
            <iframe
              width="560"
              height="315"
              src={workouts.video}
              title={workouts.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div>
              <h2>description of workouts</h2>
              <div>
                <p>{workouts.description}</p>
              </div>
              <button onClick={handleDeleteWorkout}>add workOut</button>
            </div>
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </div>
  );
};

export default Myworkouts;
