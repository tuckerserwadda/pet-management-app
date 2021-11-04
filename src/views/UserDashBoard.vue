<template>
    <div class="dashboard-container">
    <h2>  the user Dashboard </h2> 
    <div id="dashboard-nav"><Menu/></div>  
    <router-view/> 
    </div>
</template>
    <script>
 import Menu from "@/components/Menu.vue"
export default {
  name: "UserDashBoard",
  components:{
      Menu
  }
};
  
    </script>