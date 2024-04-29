import axios from "axios";
const BASE_URL = "http://localhost:5000"
const API = axios.create({
    baseURL: BASE_URL
})
export const postlist = (FormData) => API.post("/todo-post", FormData)
export const getlist = () => API.get("/todo-get")
export const deletelist = (id) => API.delete(`/todo-delete/${id}`)
export const patchlist=(FormData,id)=>API.patch(`/todo-patch/${id}`,FormData)