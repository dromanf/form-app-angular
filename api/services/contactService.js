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
        console.error('all fileds are required');
        throw new Error('all fields are required')
    }

    try {
        const result = await contactRepository.persistComment(contact);
        return result;
    }catch(err) {
        console.error('Error with DB', err);
        throw new Error( err.message);
    }
   
} 

module.exports = {persistContactMessage}