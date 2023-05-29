
import { API_URL } from '../config.js'

export default async function createTask(token, task) {
    const json = JSON.stringify(task)

    const response = await fetch(`${API_URL}/task`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: json
    })

    return await response.json()
}