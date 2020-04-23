const supertest = require('supertest');
const Cdb = require('../../app/models/cdb');
const app = require('../../app.js');
const request = supertest(app);

const TOKEN= "123456"

describe("CdbController", () =>{
    beforeEach(async ()=> {

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

      describe('DELETE/cdb/_id.json - Deve deletar um  registro ',() =>{
      it('Deve retornar o Statuscode 200 ', async(done) =>{

        const cdb = await Cdb.create({
            nome: "Nome23cccrroo2lls234", 
            valor_taxa: 10,
            vencimento: '2020-12-13'
            
        })  
        const response = await request.delete(`/cdb/${cdb._id}.json`).set('token',TOKEN);
        
        expect(response.status).toBe(204);
        done();
       });
      }); 
      describe('GET/cdb/_id.json - Deve buscar os  registro ',() =>{
        it("'Deve retornar uma lista de cdb", async (done) => {
          const resposta = await request.get("/cdb.json").set({'token': TOKEN})
          expect(resposta.status).toBe(200)
          done();
        });
      });

      describe('CREATE/cdb/_id.json -  ',() =>{
        it("'Deve criar um registro", async (done) => {

          const body = {
            nome: "Brener Bruno",
            valor_taxa: 1.53,
            vencimento: "2020-04-17"
          }

          const resposta = await request.post("/cdb.json").set({'token': TOKEN}).send(body)
          expect(resposta.status).toBe(204)
          done();
        });
      });

      describe('GET/cdb/_id.json -  ',() =>{
        it("'Deve  um registro pelo Id", async (done) => {

          const cdb = await Cdb.create({
            nome: "Nome-Rosangela-Teste findById", 
            valor_taxa: 10,
            vencimento: '2020-12-12'
            
        })  
        const response = await request.get(`/cdb/${cdb._id}.json`).set('token',TOKEN);
          expect(response.status).toBe(204)
          done();
        });
      });
      describe('PUT/cdb/_id.json - Deve atualizar registro ',() =>{
        it('Deve retornar o Statuscode 204 ', async(done) =>{
           
          const cdb = await Cdb.create({
            nome: "Wesley Teste", 
            valor_taxa: 10,
            vencimento: '2020-12-12'
    
          })
    
          body = {
            nome: 'Wesley Atualiza Teste', 
            valor_taxa: 20,
            vencimento: '2020-12-20'
          }
    
          const response = await request.put(`/cdb/${cdb._id}.json`).set('token',TOKEN).send(body);
          expect(response.status).toBe(200);
          done();
        });
      });
  }); 
  
    