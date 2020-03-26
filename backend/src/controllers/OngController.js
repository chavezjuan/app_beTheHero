const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },


    async create(request, response) {
        //const params = request.query; //Para acessar os parâmetros da query
        //const params = request.params; // Para acessar route
        const { name, email, whatsapp, city, uf } = request.body; //Acessa o corpo da requisão. Por exemplo, criar um usuário
        
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}