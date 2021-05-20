const User = require("./users")


function createUser (){
    const user = new User({name: "hamid", email: 'h@exampl.eco'})
    user.save().then((resp)=>{
        console.log("resp", resp)
    })
}

function readUser (){
    User.findOne({name: "hamid"}).then((user)=>{
        console.log(user)
    })
}

function readAllUsers (){
    User.find({name: "fatemeh"}).then((users)=>{
        console.log(users)
    })
}

function updateUser (){
    User.findOne({name: "fatemeh"}).then((user)=>{
        user.name = "fatima"
        user.save()
    })
}


function deleteUser (){
    User.findOne({name: "fatima"}).then((user)=>{
        user.delete()
    })
}

module.exports = {
    createUser,
    readAllUsers,
    readUser,
    updateUser,
    deleteUser
}