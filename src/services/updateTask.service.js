import { API_URL } from '../config.js'

export default async function updateTask(task) {
    const json = JSON.stringify(task)

    const response = await fetch( `${API_URL}/${task.id}`  , {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },

        body: json
    })

    return await response.json()
}