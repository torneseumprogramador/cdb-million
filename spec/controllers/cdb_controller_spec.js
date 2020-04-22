const supertest = require('supertest');
const Cdb = require('../../app/models/cdb');
const app = require('../../app.js');
const request = supertest(app);

const TOKEN= "1234iujkmdkfjdi"

describe("CdbController", () =>{
    beforeEach(async() => {

      await Cdb.deleteMany({}, async(err, removed) => {
        await Cdb.create({
            nome: 'Nome-A', 
            valor_taxa: 15,
            vencimento: '2021-12-01'
            
          
        });
  
        await Cdb.create({
            nome: 'Nome-B', 
            valor_taxa: 20,
            vencimento: '2022-12-01'
            
          });
        });
      });
    });

      describe('DELETE/cdb.json - Deve deletar um  registro ',() =>{
      it('Deve retornar o Statuscode 200 ', async(done) =>{

        const cdb = await Cdb.create({
            nome: "Nome-teste-teste-nome novo", 
            valor_taxa: 10,
            vencimento: '2020-12-13'
            
        })  
        const response = await request.delete(`/cdb/${cdb._id}.json`).set('token',TOKEN);
        expect(response.status).toBe(200);
        done();
     });
    });

    