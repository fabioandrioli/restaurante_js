var connection = require('./db.js');
module.exports = {
    render(res){
        res.render('contact', { //nome do arquivo dentro da pasta view
            title: 'Contact - Restaurante saboroso',
            isHome:false,
            background:'images/img_bg_3.jpg',
            h1: "Diga um oi!",
          });
    },

    save(fields){
        return new Promise((resolve,reject) =>{
        
            connection.query('INSERT INTO tb_contacts (name,email,message) VALUES(?,?,?,?,?)',[
                fields.name,
                fields.email,
                fields.message,
            ],(err,results) => {
                if(err){ reject(err); }
                resolve(results);
            });
          })
    }
}