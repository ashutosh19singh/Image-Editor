const mongoose = require('mongoose');

const dbname = `mern`;
const url = `mongodb+srv://ashutosh19:ashutosh@cluster0.vo7dazk.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
   console.log('database connected')  
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;