import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const auth = localStorage.getItem('trackit');
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    }
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

function getHabits(body) {
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

function habitCheck(habitId) {
    const config = createHeaders()
    const promise = axios.post(`${BASE_URL}/habits${habitId}/check`, config)
    return promise
}

function habitUncheck(habitId) {
    const config = createHeaders()
    const promise = axios.post(`${BASE_URL}/habits${habitId}/uncheck`, config)
    return promise
}

function getHabitsDaily() {
    const config = createHeaders()
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, config)
    return promise
}

export { postRegister, postLogin, postHabits, getHabits, deleteHabits, getHabitsToday, habitCheck, habitUncheck, getHabitsDaily };