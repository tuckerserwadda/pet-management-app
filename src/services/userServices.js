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
        'Content-Type':'application/json',
    }
})
apiClient['Authorization'] = axios.defaults.headers.common['Authorization']
export default{
    // login end point
    login(credentials){
        return apiClient.post("/login",credentials)
    },
    // create account
    signUp(account){
        return apiClient.post("/users", account)
    },
    // get user profile
    getUser(userName){
        return apiClient.get("/users/" + userName)
    }
}