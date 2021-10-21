<template>
<h1>Welcome to our pet management System </h1>
  <div id="form-container">
  <h2>Login Here</h2>
  </div>
  <div class ="login-form ">
  <form @submit.prevent="login">
  <div><label for="username">User Name</label></div><div><InputText id="username"  placeholder="userName" type="text" v-model="userName"/></div>
  <div> <label for="password">Password</label></div><div><InputText type="password" v-model="password"/></div>
  <div><Button label="Login" type="submit" /></div>
  </form>
<div><p>{{error}}</p></div>
<div><div id="click"> Click Here To: </div><div><Button label="Create Account" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" /></div></div>
  </div>
  <div>
  <!-- the sign up dialogbox-->
<Dialog v-model:visible="signUpDialog" :style="{width: '450px'}" header="Create Account" :modal="true" class="p-fluid">
<div class="p-field">
                <label for="userName">User Name</label>
                <InputText class="userName" v-model.trim="account.userName" required="true" autofocus :class="{'p-invalid': submitted && !account.userName}" />
                <small class="p-error" v-if="submitted && !account.userName" >User Name Required.</small>
            </div>
            <div class="p-field">
                <label for="emailAdress"> Email Address</label>
                <InputText type="email" class="emailAddress" v-model.trim="account.emailAddress" required="true" autofocus :class="{'p-invalid': submitted && !account.emailAddress}" />
                <small class="p-error" v-if="submitted && !account.emailAddress" >Email Required .</small>
            </div>
            <div class="p-field">
                <label for="firstName">first Name</label>
                <InputText class="firstName" v-model.trim="account.firstName" required="true" autofocus :class="{'p-invalid': submitted && !account.firstName}" />
                <small class="p-error" v-if="submitted && !account.firstName" >First Name Required.</small>
            </div>
            <div class="p-field">
                <label for="lastName">Last Name</label>
                <InputText class="lastName" v-model.trim="account.lastName" required="true" autofocus :class="{'p-invalid': submitted && !account.lastName}" />
                <small class="p-error" v-if="submitted && !account.lastName" >Last Name Required</small>
            </div>
            <div class="p-field">
                <label for="password">Password</label>
                <InputText type="password" class="password" v-model.trim="account.password" required="true" autofocus :class="{'p-invalid': submitted && !account.password}" />
                <small class="p-error" v-if="submitted && !account.password" >password required.</small>
            </div>
            <div class="p-field">
                <label for="confirmPassword">Confirm Password</label>
                <InputText type="password" class="comfirmPassword" v-model.trim="confirmPassword" required="true" autofocus :class="{'p-invalid': submitted && account.password !== confirmPassword}" />
                <small class="p-error" v-if="submitted && account.password !== confirmPassword" >Password are not the same.</small>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text"  @click="createAccount"/>
            </template>
</Dialog>
  </div>
</template>
<script>
/**
we get the userName and the password. on submit we will be dispatching 
a login(action) method and send a payload of the username and password.
then when login is successfull we will sending to the user dashboard
**/
import {authComputed} from "@/store/helpers.js"
import userServices from "@/services/userServices.js"
export default{
data(){
    return{
        userName:'',
        password:'',
        error:null,
        user:null,
        confirmPassword:'',
        submitted:false,
        signUpDialog:false,
        account:{}
    }
},
 computed:{
    ...authComputed
  } ,
methods: {
    login(){
        if(this.userName == "" || this.password == 
        '' ){
            this. error = "both user name and password are required "
        }else{
        this.$store.dispatch('login',{
           userName:this.userName,
           password:this.password
        }).then(()=>{
          this.user = this.$store.state.user
          if(this.user == null){
            this.error = "check user name or password"
          }
        })
        }       
    },
    // create new event
        openNew() {
            this.submitted = false;
            this.signUpDialog = true;
        },
        hideDialog(){
         this.confirmPassword='',
        this.signUpDialog=false;
        this.submitted=false;
        this.account={}
        },
        createAccount(){
          this.submitted= true;
          if(this.account.password == this.confirmPassword){
            userServices.signUp(this.account)
            this.$toast.success("Account sucessfully created");
          this.signUpDialog = false; 
          this.account={} 
          } 

           
        }
        
        
},
}
</script>
<style  scopped>
::v-deep(.p-password input) {
    width: 15rem
}
h2{
  color:green;
}
.login-form{
    disPlay:flex;
    flex-direction:column;
    line-height: 50px;
    margin:10px;
    background-color:#e4ddeb;
    padding:20px;
    text-align:center;
}
#form-container{
    
}
p{
    color:red
}
#click{
  color:#3a656b;
}

</style>