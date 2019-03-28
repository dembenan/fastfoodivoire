
require('babel-register')
const mysql = require('mysql')
const db = mysql.createConnection({

	host:'localhost',
	database: 'nodejs',
	user: 'root',
	password:''


})

db.connect((err) => {

	if(err)
		console.log(err.message) 
	else
		console.log('connected.')
	document.getElementById("myform").addEventListener("submit",function(){
	alert('formulaire envoyé!!!!');
});

		db.query("INSERT INTO clients (username,password) VALUES ('dembe','dembenan2019')",(err,result) =>{
			if(err)
				console.log(err.message)
			else
				console.log(result)
		})
})


