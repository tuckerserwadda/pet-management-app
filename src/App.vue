<template>
<div v-if="loggedIn" class="container">
<div id="nav" >
<router-link to="/"> User DashBoard</router-link>
</div>
<div><div><span class="as">Logged in as:<strong id="name"> {{user}}</strong></span></div><Button id="logout" @click="logout" label="logout"/></div>
</div>
<div v-if="loggedIn"><DashBoard /></div>

  <router-view />
</template>
<script>
import {authComputed} from "@/store/helpers.js"
import DashBoard from "@/views/UserDashBoard.vue"
export default{
  components:{
    DashBoard
  },

  computed:{
    ...authComputed,
     user(){    
         return this.$store.state.userName.toUpperCase()
     }

  } ,
  methods: {
    logout(){
      this.$store.dispatch('logout')
      .then(()=>{
          
            this.$router.push({name: 'Home'})
        })
    }
  },
}
</script>

<style scopped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#logout{
  margin: 20px;
}
.container{
  display:flex;
  flex-direction:raw;
  justify-content:space-between;
}
#name{
  color:#eda6dd;
}
</style>
