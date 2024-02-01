var express = require('express');
var router = express.Router();

const db = require("../db");

/* GET home page. */
router.get('/', async (req, res, next) => {
	try {
		const docs = await db.findAll();
		res.render('index', { title: 'Nunes Sports', docs });
	} catch (err) {
		next(err);
	}
})

router.post('/save', async (req, res, next) => {
	try {
		const costumer = req.body;
		const result = await db.insert(costumer);
		res.redirect('/');
	} catch (err) {
		next(err);
	}
})

router.get('/new', async (req, res, next) => {
	try {
		const docs = await db.findAll();
		const code_list = [];
		for(let i=0, n=docs.length; i<n; i++) {
			code_list.push(docs[i].code)
		}
		res.render('new', { title: 'Nunes Sports', code_list, doc: {"name":"","code":"","price":"","description":""}, action: 'save' });
	} catch (err) {
		next(err);
	}	
});

router.get('/remove', async (req, res, next) => {
	try {
		const docs = await db.findAll();
		res.render('remove', { title: 'Nunes Sports', docs });
	} catch (err) {
		next(err);
	}	
});

router.get('/show_all', async (req, res, next) => {
	try {
		const docs = await db.findAll();
		res.render('show_all', { title: 'Nunes Sports', docs });
	} catch (err) {
		next(err);
	}	
});

router.post('/delete', async (req, res, next) => {
	try {
		const costumer = req.body.id;
		const ids = costumer.split(",");
		for(let i=0, n=ids.length; i<n; i++) {
			if(ids[i] != 0){
				const result = await db.deleteOne(ids[i]);
			}
		}
		res.redirect('/remove');
	} catch (err) {
		next(err);
	}
})

router.get('/edit/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
	const docs = await db.findAll();
	const code_list = [];
	for(let i=0, n=docs.length; i<n; i++) {
		code_list.push(docs[i].code)
	}
    const doc = await db.findOne(id);
    res.render('new', { title: 'Edição de Produto', code_list, doc, action: '/edit/' + doc._id });
  } catch (err) {
    next(err);
  }
});

router.post('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const code = req.body.code;
  const price = req.body.price;
  const description = req.body.description;

  try {
    const result = await db.update(id, { name, code, price, description });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
})


module.exports = router;
