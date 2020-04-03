const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/* O celebrate integra o Joi ao Express.
 * Se a chave do objeto for uma variável usamos colchetes por volta
 */

/****************** ONGs ******************/ 
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().regex(/^\d+$/).min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().regex(/^[a-z,A-Z]{2}$/)
    })
}) , OngController.create);

routes.delete('/ongs', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
})  , OngController.delete);

/************************ Incidents ************************/
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.post('/incidents',celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}) , IncidentController.delete);

/********************* Profile *********************/
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
}) , ProfileController.index);

/********************* Session *********************/
routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}), SessionController.create);


module.exports = routes;