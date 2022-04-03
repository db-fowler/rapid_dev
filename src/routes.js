import pages from "./pages";

export default {
  mode: "history",
  routes: [
    {
      path: "/",
      component: pages.main,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: pages.dashboard
        },
        {
          path: "item",
          name: "item",
          component: pages.item
        }
      ]
    },

    {
      path: "*",
      component: pages.not_found
    }
  ]
};
