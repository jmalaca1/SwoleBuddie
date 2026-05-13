import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { MealGenerator } from "./pages/MealGenerator";
import { MealDetails } from "./pages/MealDetails";
import { Rewards } from "./pages/Rewards";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "generate", Component: MealGenerator },
      { path: "meal/:mealId", Component: MealDetails },
      { path: "rewards", Component: Rewards },
    ],
  },
]);