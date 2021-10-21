import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DashBoard from "../views/UserDashBoard.vue";
// import SignUP from "../views/UserDashBoard.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    meta:{requiresAuth:true} // allows to add custom attributes 
  },
  {
    path: "/login",
    name: "Login",
    component:Login,
  },
  // {
  //   path: "/signUp",
  //   name: "SignUp",
  //   component:SignUp,
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
/**
 * before calling the router check if the router hass 
 * the meta .requiresAuth  if the router has and not loged in take them to the 
 * home page or else take them to the nexts route 
 * 
 * */
router.beforeEach((to, from, next)=>{
 const loggedIn= localStorage.getItem('user')
 if(to.matched.some(record =>record.meta.requiresAuth) && !loggedIn){
     next("/")
   }else{
     next()
   }
   
})

export default router;
