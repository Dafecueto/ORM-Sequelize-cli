const db = require("../sequelize.verbs");

class UserService {
    constructor() {

    }



    add(name, lastname, email) {
        db.put(name, lastname, email);
    }

    get(param) {
        if (!param) {
        db.get();
        }
        db.getByParam(param)
    }
}

const serv = new UserService();

//serv.add("Joo", "Jee", "aaa@aaa.aaa")
serv.get(5);