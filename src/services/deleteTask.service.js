import { API_URL } from "../config"


export default async function deleteTask (token,id) {

    const response = await fetch(`${API_URL}/task/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return await response.json()
}