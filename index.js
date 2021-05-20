const connectToDatabase  = require("./connectToDatabase")
const {createUser,readAllUsers,readUser,updateUser,deleteUser} = require("./actions")



connectToDatabase().then(()=>{
    // createUser();
    // readAllUsers()
    // readUser()
    deleteUser()
}).catch((error)=>{console.log(error)})