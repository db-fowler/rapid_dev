export default {
  // main page
  main: () => import("./pages/Main.vue"),
  // child pages
  dashboard: () => import("./pages/children/Dashboard.vue"),
  item: () => import("./pages/children/Item.vue"),

  not_found: () => import("./pages/404.vue")
};
