import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { Login } from "./pages/loginpage";
import { Register } from "./pages/registerPage";
import HomePage from "./layout/homepage";
import Workout from "./pages/workouts";
import { WorkoutMenu } from "./pages/workoutmenu";
import Myworkouts from "./pages/myworkouts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workouts/:id" element={<Workout />} />
        <Route path="/menu" element={<WorkoutMenu />} />
        <Route path="/myworkouts" element={<Myworkouts />} />
      </Route>
    </Routes>
  );
}
