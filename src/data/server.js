const express = require('express'),
	sqlite = require('sqlite3').verbose(),
	cryptoJS = require('crypto-js'),
	jwt = require('jsonwebtoken'),
	cors = require('cors'),
	app = express(),
	port = 3001,
	dataBase = new sqlite.Database('database.db'),
	generate = require('./jwt/generate.js')

	

app.use(express.json())
app.use(cors())

 
 const generateAccessToken=(username,role)=>{  
	 return jwt.sign({ username,role }, JWT_SECRET , { expiresIn: "36000s" });
	 }

app.get('/courses', (req, res) => {
	dataBase.all('SELECT * FROM courses', [], (err, data) => {
		if(err) console.error(err.message)
		res.send(data)
	} )
})

app.get('/courses/:id', (req, res) => {
	const id = req.params.id

	dataBase.get('SELECT * FROM courses WHERE id = ?', [id], (err, data) => {
		if(err) console.error(err.message)
		res.send(data)
	})
})

app.post('/addcourse', (req, res) => {
	const {img, title, author, progressInfo, rating, learnTimeByMinutes, learnTimeByHours} = req.body

	dataBase.run('INSERT INTO courses (img, title, author, progressInfo, rating, learnTimeByMinutes, learnTimeByHours) VALUES (?, ?, ?, ?, ?, ?, ?)', [img, title, author, progressInfo, rating, learnTimeByMinutes, learnTimeByHours], (err, data) => {
		res.send('done')
	})
})

app.put('/changecourse/:id', (req, res) => {
	const id = req.params.id,
	{img, title, author, progressInfo, rating, learnTimeByMinutes, learnTimeByHours} = req.body


	dataBase.run('UPDATE courses SET img = ?, title = ?, author = ?, progressInfo = ?, rating = ?, learnTimeByMinutes = ?,  learnTimeByHours = ? WHERE id = ?', [img, title, author, progressInfo, rating,learnTimeByMinutes, learnTimeByHours, id], (err, data) => {
		if(err) console.error(err.message)
		res.send('Done')
	})
})

app.delete('/deletecourse/:id', (req, res) => {
	const id = req.params.id

	dataBase.run('DELETE FROM courses WHERE id = ?', [id], (err,data) => {
		if(err) console.error(err.masage)
		res.send('Done')
	})
})
	
app.post('/register', (req, res) => {
	const  username = req.body.username,
	  password = req.body.password,
	  hashedPassword = cryptoJS.SHA256(password).toString()
  
	dataBase.run(' INSERT INTO users ( username, password, role) VALUES (?, ?, ?)',[ username, hashedPassword, 'user'],(err, data) => {
		if (err) {
		  res.send(JSON.stringify({ status: 'Error registration' }))
		}
		res.send(JSON.stringify({ status: 'User created' }))
	  }
	)
  })

	app.post('/login',(req, res) => {
    const {username, password}  = req.body;
    const hashed_password = cryptoJS.SHA256(password).toString();

    dataBase.get('SELECT * FROM users WHERE username=?',[username],(err,row)=>{
        if(row && username === row.username && hashed_password === row.password){
        const token = generate.generateAccessToken(username);

            res.send({status:'Logged in', jwt: token, role: row.role});
       }else{
           res.send({status:'Wrong credentials'});
       }
    })
    })

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
  });

