const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
//const url = 'mongodb://localhost/angular-auth';
const url = 'mongodb+srv://tbonetcosta:teresamarta@cluster0.scnjfdg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));

app.listen(3000);
console.log('server on port', 3000);


// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));
// routes
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const Partido = require('../models/Partido');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('hello')
});

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
});

router.post('/createpartido', async (req, res) => {
    const { dia, mes, ano, hora, lugar, dificultad } = req.body;
    const newPartido = new Partido ({dia, mes, ano, hora, lugar, dificultad});
  
    await newPartido.save();
    return res.status(200).json(newPartido);
  })

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('Este email no existe');
    if (user.password !== password) return res.status(401).send('Contraseña incorrecta');
    else{
		const token = jwt.sign({_id: user._id}, 'secretkey');
        return res.status(200).json({token})
    }
});



router.get('/partidas', async (req, res) => {
    let partidas = await Partido.find()
    res.send(partidas);
  });


async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}
router.get('/secreto', verifyToken, (req, res) => {
    res.send('Mensaje desde el backend')
})


module.exports = router;