import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api =  () => {
  const token = AsyncStorage.getItem("E-COMMECER_token");

  const config = axios.create({
    baseURL: "http://192.168.1.104:8080/api/",
  });

  if(!token){
    config.defaults.headers["Authorization"] = "Dev-HQseyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjI2NjM4MjUyLCJleHAiOjE2MjY3MjQ2NTJ9.ud2odA-eMOYLtrTCHRXT1uxulPx7wwBiBX4FPZQl9s0DuJ0Oub_f0NMELq9222dCFzRpDiRHYNgQmeEJ9kYNtg"
  }

  return config
};

export default api;