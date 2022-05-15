import API from 'axios';

export default class UserService {

    login = (data) => API.post(`login/`, data)
        .then(res => {
            console.log(res);
            console.log(res.data);
            return res
        })

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
}