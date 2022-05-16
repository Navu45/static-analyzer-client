import API from './http-common';
import axios from "axios";
import {useAuthProvider} from "./contexts/AuthContext";

export default class UserService {

    login = (data) => {
        const {user, setUser} = useAuthProvider();
        return axios.post(`http://localhost:8082/login`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setUser({
                    name:  res.data.user.firstName + res.data.user.lastName,
                    token: res.headers['Authorisation'],
                    email: res.data.user.email
                })
                localStorage.setItem("user", user)
            })
    }

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

    evaluateToken = () =>
    {
        const {user} = useAuthProvider();
        const headers = {
            'Authorization': 'Bearer ' + user.token,
            'My-Custom-Header': 'foobar'
        };
        return API.post(`token/`, null, {headers})
            .then(res => {
                return res.data.email === user.email
            })
    }

}