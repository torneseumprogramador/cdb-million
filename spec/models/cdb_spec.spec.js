const Cdb = require("../../app/models/cdb.js");

describe('Modelo de Cdb', () => {
  beforeEach(async ()=>{
  	console.log("k estou eu");
    await Cdb.deleteMany({})
  });

  it("Deve retornar modelo cdb", async (done) =>{
    const cdb = await Cdb.find({})
    expect(cdb != undefined).toBe(true);
    done();
  })
});