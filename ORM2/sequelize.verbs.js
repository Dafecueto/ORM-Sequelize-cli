const db = require('./models');
 
const get = async () => {
    try {
        const usuarios = await db.Usuario.findAll({
            include: [{
                model: db.LenguajeP,
                as: 'lenguajesProgramacion',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
            }],
        });
        console.log(JSON.stringify(usuarios));
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

const getById = async(id) => {
    try{
    const usuario = await db.Usuario.findOne({
        where: {id:id}
    })
    console.log(JSON.stringify(usuario))
    process.exit();
} catch (error) {
    console.log(error)
}
}
 

const put = async(name, lastname, email) => {
    try {
        const user = await db.Usuario.create({nombre: name, apellidoP: lastname, email: email})
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

const remove = async(id) => {
    const user = await db.Usuario.destroy({
        where: {id: id}
    })
}

exports.get = get;
exports.put = put;
exports.remove = remove;
exports.getById = getById;
 
//put("Joo", "Jee", "aaa@aaa.aaa");