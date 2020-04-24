## padrão de rotas
router.get("/", HomeController.index);

router.get("/cdb.json", CdbController.index);

router.post('/cdb.json', CdbController.create );

router.put('/cdb/:cdb_id.json', CdbController.change );

router.delete('/cdb/:cdb_id.json', CdbController.delete);


