const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cdb-million', {useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false});

module.exports = mongoose;