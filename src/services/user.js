import api from "configs/API";
import { getCookie } from "src/utils/cookies";

const token = getCookie('accessToken')
console.log('token is:', token)

const getProfile = () => api.get("user/whoami", { headers: { Authorization: `Bearer ${token}` } });

export { getProfile } 