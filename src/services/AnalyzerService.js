import API from './http-common';

export default class AnalysisService {

    login(data) {
        API.post(`/login`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res.data
            })
    }

    registration(data) {
        API.post(`/registration`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res.data
            })
    }

    activate(data) {
        API.post(`/activate/${data}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res.data
            })
    }

}