import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import LoginPage from "./pages/loginpage";
import Register from "./pages/registerPage"; // default export!
import HomePage from "./layout/homepage";
import Workout from "./pages/workouts";
import { WorkoutImages } from "./pages/workoutImg";
import MyWorkouts from "./pages/myworkouts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="workouts" element={<WorkoutImages />} />
        <Route path="workouts/:id" element={<Workout />} />
        <Route path="myworkouts" element={<MyWorkouts />} />
      </Route>
    </Routes>
  );
}
