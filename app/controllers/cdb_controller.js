const Cdb = require('../models/cdb');
const TOKEN = "123456";

const CdbController = {
    index: async(req,res, next)=>{
        if(req.headers.token === TOKEN){
            try{ 
                const cdb = await Cdb.find({})
                return res.status(200).send(cdb)

            }
            catch(err){
                return res.status(401).send(err)
            }
            
        }
        return res.status(401).json({error: "Acesso negado API cdb-Token inválido"})    
    },

    findbyid: async(req, res, next) => {
      if(req.headers.token === TOKEN){
        try{
          const cdb = await Cdb.findById(req.params._id)
          
          return res.status(204).send(cdb);
        }
        catch(err){
         return res.status(401).send(err)
        }
      }
      return res.status(401).json({error: "Acesso não autorizado"})
    },
    create: async(req, res, next) => {
        if(req.headers.token == TOKEN){
          try {
            await Cdb.create({
              nome: req.body.nome, 
              valor_taxa: req.body.valor_taxa,
              vencimento: req.body.vencimento
              
            });
            res.status(204).send({});
          }
          catch(err) {
            res.status(401).send(`Erro: ${err}`)
          }
        }
        else {
          res.status(401).send(`Acesso negado, token inválido`)
        }
      },

      change: async(req, res, next) => {
        if(req.headers.token === TOKEN){
          try{
            
            await Cdb.findOneAndUpdate({
                _id: req.params.cdb_id}, {
                 nome: req.body.nome,
                 valor_taxa: req.body.valor_taxa,
                 vencimento: req.body.vencimento
                 
                })
            return res.status(204).send(`Alterando com o id ${req.params._id}`)
          }
          catch(err){
            console.log(err)
            return res.status(401).send(`Erro: ${err}`)
          }
        }
        return res.status(401).json({error: "Acesso não autorizado"})
      },

      delete: async(req, res, next) => {
        if(req.headers.token === TOKEN){
          try{
            await Cdb.findByIdAndDelete(req.params._id)
            return res.status(204).send({});
          }
          catch(err){
           return res.status(401).send(err)
          }
        }
        return res.status(401).json({error: "Acesso não autorizado"})
      }
}

module.exports = CdbController;