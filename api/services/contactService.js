const contactRepository = require('../repositories/contactRepository');

//Es una buena practica validar en el front-end y back-end
const validateRequiredFileds = (contact) => {
    return !!contact.fullName
    && !!contact.company
    && !!contact.email
    && !!contact.phoneNumber
    && !!contact.category
    && !!contact.message
}

const persistContactMessage = async (contact) => {
    //Revisamos si el contacto cumple con todos los campos requeridos
    if(!validateRequiredFileds(contact)) {
        console.error('Todos los campos son requeridos, por favor validar');
        throw new Error('Todos los campos son requeridos, por favor validar')
    }

    try {
        const result = await contactRepository.persistComment(contact);
        return result;
    }catch(err) {
        console.error('Error de conexion con la base de datos', err);
        throw new Error( err.message);
    }
   
} 

module.exports = {persistContactMessage}