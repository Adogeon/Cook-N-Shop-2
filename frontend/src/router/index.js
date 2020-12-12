import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/recipes",
    name: "Recipes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Recipes.vue"),
  },
  {
    path: "/ingredients",
    name: "Ingredient",
    component: () => import("../views/Ingredients.vue"),
  },
  {
    path: "/recipe/:id",
    name: "RecipeDetail",
    component: () => import("../views/RecipeDetail.vue"),
  },
  {
    path: "/recipe/new",
    name: "NewRecipe",
    component: () => import("../views/NewRecipe.vue"),
    children: [
      {
        path: "intro",
        component: () => import("../components/NewRecipeComponents/intro.vue"),
      },
      {
        path: "ingredients",
        component: () =>
          import("../components/NewRecipeComponents/ingredients.vue"),
      },
      {
        path: "instructions",
        component: () =>
          import("../components/NewRecipeComponents/instructions.vue"),
      },
      {
        path: "final",
        component: () => import("../components/NewRecipeComponents/final.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
