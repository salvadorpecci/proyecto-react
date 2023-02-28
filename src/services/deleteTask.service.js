import { API_URL } from "../config"

export default async function deleteTask (id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    return await response.json()
}