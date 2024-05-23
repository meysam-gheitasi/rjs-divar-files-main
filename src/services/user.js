import api from "src/configs/API";


const getProfile = () => api.get("user/whoami");

export { getProfile } 