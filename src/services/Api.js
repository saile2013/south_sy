const axios = require('axios');
const md5Hash = require("md5-hash");
const baseUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io';

class Api {
    
    getLogin (email, password){
        const senha = md5Hash.default(password);
        const url = `http://localhost:3333/credenciais?email=${email}&token=${senha}`;
        return axios({
            method: 'get',
            url: url,
        });
    }

    async verificaLogin (token){
        const url = `http://localhost:3333/credenciais?token=${token}`;
        return await axios({
            method: 'get',
            url: url,
        });
    }

    getDragons (){
        const url = `${baseUrl}/api/v1/dragon`;
        return axios({
            method: 'get',
            url: url,
        });
    }

    dtlDragons (id){
        const url = `${baseUrl}/api/v1/dragon/${id}`;
        return axios({
            method: 'get',
            url: url,
        });
    }

    async postsDragons (data){
        const url = `${baseUrl}/api/v1/dragon`;
        return await axios({
            method: 'post',
            url: url,
            data: data,
        });
    }

    async putDragons (data){
        const url = `${baseUrl}/api/v1/dragon/${data.id}`;
        return await axios({
            method: 'put',
            url: url,
            data: data,
        });
    }

    async removeDragons (id){
        const url = `${baseUrl}/api/v1/dragon/${id}`;
        return await axios({
            method: 'delete',
            url: url,
        });
    }
}

export default new Api();