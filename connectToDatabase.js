const mongoose = require("mongoose")

const connectToDatabase = ()=> new Promise((resolve, reject)=>{
  mongoose.connect("mongodb://localhost/db1'")

  mongoose.connection.once('open', () => {
      resolve('successfully connected to database')
    })
    .on('error', (error) => {
      reject('error connecting to database')
    })
})

module.exports = connectToDatabase