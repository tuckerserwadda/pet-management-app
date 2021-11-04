<template>
<Card>
<template #content>
<div v-if="profile" class="profile-container">
<div  id="profile-name"><strong>Name :  </strong>{{profile.firstName.toUpperCase()}} {{profile.lastName.toUpperCase()}}</div>
<div  id="profile-email"><strong>EmailAddress :  </strong>{{profile.emailAddress}} </div>
<div  id="profile-gender"><strong>Gender :  </strong>{{profile.gender}} </div>
<div  id="profile-residential-address"><strong>Adress :  </strong>{{profile.residentialAdress}} </div>
</div>

</template>

</Card>
</template>
<script>
export default{
mounted() {
        this.$store.dispatch("getUserProfile", this.$store.state.userName)
},
computed:{
    profile(){
        return this.$store.state.profile
    }  
}
}
</script>
<style>
.profile-container{
    background-color:#c1b4db;
    height:16rem;
    padding:20px;
    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    box-shadow: 5px 5px 5px gold;
}
</style>