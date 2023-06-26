import axios from 'axios'
const API_URL = import.meta.env.VITE_BACKEND_URL;

async function registerUser(form) {
    try {
        const request_url = new URL(`${API_URL}/create_user?name=${form.name}&email=${form.email}&phone=${form.phone}${form.description ? `&description=${form.description}` : ''}`);
        const response = await axios.post(request_url.href);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export { registerUser }