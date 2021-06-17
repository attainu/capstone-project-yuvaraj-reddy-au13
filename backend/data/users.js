const bcrypt = require('bcryptjs');


const users = [
    {
        name : 'Admin',
        email : 'admin@gmail.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : 'john',
        email : 'john@gmail.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : 'jane',
        email : 'jane@gmail.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
]


module.exports = users ;