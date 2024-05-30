import api from "src/configs/api"

const addCategory = data => api.post('category', data)

const getCategories = () => api.get('category')

export { addCategory, getCategories }