const Cdb = require("../../app/models/cdb.js");


describe('Modelo de Cdb', () => {
  beforeEach(async ()=>{
    await Cdb.deleteMany({}, async() => {
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
    })
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

  it('Deve alterar o valor_taxa e o vencimento', async(done) => {
    const cdb = await Cdb.create({
      nome: "cdb-2",
      valor_taxa: 10.8,
      vencimento: "2020-04-27"
    })

    let response = await Cdb.findByIdAndUpdate( cdb._id, {nome: 'cdb-alterado', valor_taxa: 12, vencimento:"2020-04-27"},{new: true});
    expect(response !==null  && response !==undefined).toBe(true)
    expect(response.valor_taxa == 12).toBe(true)
    done();
  });

  it('Deve deletar um CDB',async(done) =>{
    const cdb = await Cdb.create({
      nome: "cdb-3",
      valor_taxa: 18,
      vencimento: "2020-01-10"
    })

    await Cdb.deleteOne({_id: cdb._id}, (err) =>{ 
      expect(err == null || err == undefined).toBe(true);

      Cdb.findOne({_id: cdb._id}).exec( async(err, cdb) => {
        expect(cdb == null && cdb == undefined).toBe(true);
      });
    });

    done();
  })
});