const connection = require('../database/connection');

module.exports = {
    /*async create(request,response) {

        ong_id = request.headers.authorization

        const { title, description, value } = request.body 

        const [id] = await connection('incidents').insert({title, description, value, ong_id})

        return response.json({
            id
        })
    },*/
    async index(request,response) {
        ong_id = request.headers.authorization
        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);
        return response.json(incidents);
        
    }

    /*async delete(request,response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization
        
        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id != ong_id){
            return response.status(401).json({error:'Operation not permitted.'})
        }

        await connection('incidents').where('id',id).delete()
        
        return response.status(204).send()

    },*/

}