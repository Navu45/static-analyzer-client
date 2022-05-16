import API from './http-common';
import axios from "axios";

export default class UserService {

    login = (data) => axios.post(`http://localhost:8082/login`, data)

    registration = (data) =>
        API.post(`registration/`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res
            })


    activate = (data) =>
        API.post(`activate/${data}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res
            })

    evaluateToken = (data) =>
    {
        const headers = {
            'Authorization': 'Bearer ' + data.token
        };

        return API.get(`token/`, null, {headers})
            .then(res => {
                console.log("token is " + res.data.email === data.email)
                return res.data.email === data.user.email
            })
            .catch(error => false)
    }

}