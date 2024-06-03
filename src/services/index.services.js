import axios from "axios";
const service =axios.create({
    baseURL:"http://localhost:5005/api"//all calls to bknd
})

//this structure allow us to intercept the call less before (from client to server)to add token
service.interceptors.request.use((config)=>{

    const authToken=localStorage.getItem("authToken")

   if(authToken){
    config.headers.authorization=`Bearer ${authToken}`
   } 

   return config

})
export default service
//now alll te calls that we make to the server
//are going to be with service