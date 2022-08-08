import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('token'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    }

    return config
}

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body)
    return promise
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body)
    return promise
}

function postHabits(body) {
    const config = createHeaders()
    const promise = axios.post(`${BASE_URL}/habits`, body, config)
    return promise
}

function getHabits() {
    const config = createHeaders()
    const promise = axios.get(`${BASE_URL}/habits`, config)
    return promise
}

function deleteHabits(habitId) {
    const config = createHeaders()
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config)
    return promise
}

function getHabitsToday() {
    const config = createHeaders()
    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise
}

function habitCheck(id) {
    const config = createHeaders()
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config)
    return promise
}

function habitUncheck(id) {
    const config = createHeaders()
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config)
    return promise
}


export { createHeaders, postRegister, postLogin, postHabits, getHabits, deleteHabits, getHabitsToday, habitCheck, habitUncheck };