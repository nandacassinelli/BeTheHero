const connection = require('../database/connection');

module.exports = {

    async create(req, resp) {
        const { id } = req.body;
        const ong_id = req.headers.authorization;

        const ong = await connection('ongs').where('id', id).select('name').first();
        if (!ong) {
            return resp.status(400).json({error: 'Nenhuma ONG encontrada com esse ID.'})
        }

        return resp.json(ong);
    }


};