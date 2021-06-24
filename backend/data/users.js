import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin",
        email: "admin@admin.com",
        password : bcrypt.hashSync('admin123', 10),
        isAdmin: true
    },
    {
        name: "Rohit",
        email: "red@red.com",
        password : bcrypt.hashSync('red123', 10)
    },
    {
        name: "Ashwariya",
        email: "soul@soul.com",
        password : bcrypt.hashSync('soul123', 10)
    }
]

export default users