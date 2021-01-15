import axios from "axios";

const BASE = "https://my-todo-list-286d3-default-rtdb.firebaseio.com/";

export default {
    getTask:async()=>{
        const response = await axios.get(`${BASE}/tasks.json `);
        if(response.data){
            const cards = Object.keys(response.data).map(key =>({
                ...response.data[key],
                taskId:key,
            }));
            return(cards);
        }     
    },

    postTask:async(newTask)=>{
        const response = await axios.post(`${BASE}tasks.json`,newTask);
        return(response);
        
    },

    putTask: async(taskId,body) => {
        await axios.put(`${BASE}tasks/${taskId}.json`,body)
    },

    deleteTask: async(taskId)=>{
        await axios.delete(`${BASE}tasks/${taskId}.json`);
    }
}