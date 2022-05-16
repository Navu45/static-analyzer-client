import API from './http-common';

export default class AnalysisService {

    analyze(data) {
        return API.get(`analyzer/analyze`, data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res.data
            })
    }

    addRepo(data, token) {
        const headers = {
            'Authorization': 'Bearer ' + token
        };
        return API.post(`analyzer/repo/add`, data, {headers})
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res.data
            })
    }

    allRepos(token) {
        const headers = {
            'Authorization': 'Bearer ' + token
        };

        return API.get(`analyzer/repos`, {headers})
            .then(res => {
                console.log(res);
                console.log(res.data);
                return res.data
            })
    }

}