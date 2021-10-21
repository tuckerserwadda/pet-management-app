/**
 * contains user api calls
 * register, login, logout, get
 * 
 */
import axios from "axios";
const apiClient = axios.create({
    baseURL:"http://localhost:8082",
    withCredentials: false,
    headers:{
        Accept:"application/json",
        'Content-Type':'application/json'
    }
})
export default{
    // login end point
    login(credentials){
        return apiClient.post("/login",credentials)
    },
    // create account
    signUp(account){
        return apiClient.post("/users", account)
    }
}