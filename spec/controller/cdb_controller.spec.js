const supertest = require('supertest');
const Cdb = require("../../app/models/cdb.js");
const cdb_controller = require("../../app/controllers/cdb_controller.js")
const TOKEN = "123456";
const app = require('../../app.js');
const request = supertest(app);

// describe("CdbController", () =>{
//   beforeEach(async() => {
//     await Cdb.deleteMany({}, async(err, removed) => {
//       await Cdb.create({
//         nome: "cdb 01",
//         valor_taxa: 12,
//         vencimento: "2025-06-06"
//       })

//       await Cdb.create({
//         nome: "cdb 02",
//         valor_taxa: 52,
//         vencimento: "2025-08-06"
//       })
//     })
//   });

//   it("Deve retornar uma lista de cdb", async (done) => {
//   	const resposta = await request.get("/cdb.json").set({'token': TOKEN})
//   	expect(resposta.status).toBe(200)
//   	done();
//   })
// })


