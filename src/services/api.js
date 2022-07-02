import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3333"

export const api = axios.create({
    baseURL: `${baseURL}/api/v1`
})


export const photo = axios.create({
    baseURL: baseURL
})
