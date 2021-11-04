<template>

<div v-if="!loggedIn"><Login/></div>

</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login.vue";
import {authComputed} from "@/store/helpers.js"
export default {
  name: "Home",
  components: {
    Login,
  },
    computed:{
    ...authComputed
  } 
};
</script>
