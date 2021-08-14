// Test using api ViaCEP => https://viacep.com.br/

const axios = require('axios')

class Api{

    static async getAdress(cep) {
        const response = (await axios.get(`https://viacep.com.br/ws/${cep}/json`)).data
        console.log('response :', response)
    }
}

// Insert your CEP
Api.getAdress('')
