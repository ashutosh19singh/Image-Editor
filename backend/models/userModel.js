const {Schema,model} = require('../connection')

const mySchema = new Schema ({
    email : String,
    username : String,
    age : Number,
    password : String,
});

module.exports = model('user',mySchema)

