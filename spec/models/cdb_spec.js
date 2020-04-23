const Cdb = require("../../app/models/cdb.js");


describe('Modelo de Cdb', () => {
  beforeEach(async ()=>{
    await Cdb.deleteMany()
  });

  it("Deve retornar modelo criado", async (done) => {
  	const cdb = await Cdb.create({
  		nome: "cdb-1",
  		valor_taxa: 1.43,
  		vencimento: "2020-04-17"
  	})

  	const resultado = await Cdb.find({_id: cdb._id})
  	expect(resultado != undefined).toBe(true)
  	expect(resultado != null).toBe(true)
  	done();
  })

  it("Deve retornar modelo cdb", async (done) =>{
    const cdb = await Cdb.find({})
    expect(cdb != undefined).toBe(true);
    done();
  })
});