import { API_URL } from '../config.js'


export default async function updateTask(token, task) {
    const json = JSON.stringify(task)

    const response = await fetch( `${API_URL}/task/${task._id}`  , {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },

        body: json
    })

    return await response.json()
}