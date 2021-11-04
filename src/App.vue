<template>
<div v-if="loggedIn" class="container">
<div class="pi pi-home" ><router-link  to="/">Home </router-link></div>
<div><div id='profile'><span class="as" @click="getProfile">Logged in as:<strong id="name"> {{user}}</strong></span></div><Button id="logout" @click="logout" label="logout"/></div>
</div>
<div v-if="showProfile" class="display-profile">
 <Dialog 
 class="p-fluid"
 position="topright"
  v-model:visible="profileDialog" 
 :style="{width: '450px', backgroundColor:'#e2daf2'}" 
 header="User Profile">
 <UserProfile/>
 <template #footer>
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"/>
</template>
  
</Dialog> 

</div>
<div v-if="loggedIn"><DashBoard /></div>
<Home/>
</template>
<script>
import {authComputed} from "@/store/helpers.js"
import DashBoard from "@/views/UserDashBoard.vue"
import Home from "@/views/Home.vue"
import UserProfile from "@/components/UserProfile"
export default{
  data(){
    return{
      profileDialog:false,
      showProfile:false
    }

  },
  components:{
    DashBoard, Home, UserProfile
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
            this.$router.go()
        })
    },
    getProfile(){
     this.profileDialog= true
     this.showProfile= true
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
#name:hover{
  color:#6230c7;
  cursor:pointer;
}
.display-profile{
  background:#c1b4db;
}

</style>
