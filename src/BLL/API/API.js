import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:3000/`,
});

export const testsAPI = {

    getTests() {
        return instance.get(`tests`);
    },

    getTest(testId) {
        return instance.get('tests/' + testId);
    },

    postTest(test) {
        return instance.post('tests/', test)
    }
}

export const usersAPI = {

    getUsers() {
        return instance.get('users')
    },

    postAuthUser(user) {
        return instance.post('authUser/', user)
    },

    getAuthUser() {
        return instance.get('authUser/')
    },

    deletAuthUser(userId) {
        return instance.delete('authUser/' + userId)
    }
}