const mongoose = require('../../db/conexao');

const Cdb = mongoose.model('cdb',{
    nome: {
        type: String,
        required: true,
        unique: true
    },
    valor_taxa: {
        type: Number,
        required: true,
        message: "A taxa de juros é mensal"      
    },
    vencimento: {
        type: Date,
        required:true,
    },
    data_compra: {
        type: Date,
        required: true,
        default: Date.now(),
        immutable: true
    }
   
});

module.exports = Cdb;