const axios = require('axios')
const assert = require('assert')
const env = require('../src/config/config')

const body = require('../src/data/personData.json')

describe('PUT', () => {
    it('atualizar pessoa', async () => {
        const res = await axios.put(env.url + '/person/1', body)
        assert(res.status == 200)
        assert(res.data.name == body.name)
    })

    it('endpoint inexistente', async () => {
        body.name = 'Xabu'
        let res

        // necessidade de trycatch com axios, pois retorno diferente de 100/200/300 ele da erro idependente do seu assert
        try {
            res = await axios.put(env.url + '/alala', body)
        } catch (error) {
            res = error.response
        }
        console.log(res)
        assert(res.status == 404)
    })
})
