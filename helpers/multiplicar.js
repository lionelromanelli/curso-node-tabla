

const crearArchivo = async( base = 5 ) => {

    try{
        for (let index = 1; index < 11; index++) {
            console.log(`5 x ${index} = ${ base * index}`);    
        }
        return `tabla-${base}`
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}