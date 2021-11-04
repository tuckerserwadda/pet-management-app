import axios from "axios";
import { createStore } from "vuex";
import userServices from "../services/userServices";

export default createStore({
  state: {
    user:null,
    userName:null,
    profile:null
  },
  mutations: {
    SET_USER_NAME(state, userName){
      state.userName = userName
    },
    SET_USER_DATA(state, userData){
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
        
      }`
    },
    CLEAR_USER_DATA(state){
      state.user= null
      state.profile = null
      localStorage.removeItem('user')
      axios.defaults.headers.common['Authorization']= null
      // or user location.reload(). this relaods the current page 
      //location.reload()
    },
    SET_USER_PROFILE(state, profile){
      state.profile= profile
    }
  },
  actions: {
    login({commit},credentials){
      userServices.login(credentials)
      .then(({data})=>{
       commit("SET_USER_DATA", data)
       commit("SET_USER_NAME",credentials.userName)
      
      }).catch(()=>{return "no token returned"})
    },
    logout({commit}){
      commit("CLEAR_USER_DATA")
    },
    getUserProfile({commit}, userName){
      userServices.getUser(userName)
      .then(resp =>{
        commit("SET_USER_PROFILE", resp.data)
      }).catch(()=>{"error user not found"})
    }

  },
  modules: {},
  getters:{
    loggedIn(state){
      return !!state.user
    },

  }
});
