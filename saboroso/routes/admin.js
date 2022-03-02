var express = require('express');
var router = express.Router();
var user = require('../includes/user');
var admin = require('../includes/admin');


router.use((req,res, next) => {
    if(['/login'].indexOf(req.url) === -1 && !req.session.user){
        res.redirect("/admin/login");
    }else{
        next();
    }
});

router.use((req,res, next) => {
    req.menus = admin.getMenus(req);
    next();
});

router.get("/",function(req,res, next){
    res.render('admin/index', {
        menus:req.menus,
        user:req.session.user,
    });
});

router.get("/logout",function(req,res, next){
   delete req.session.user;
   res.redirect("/admin/login");
});

router.get("/login",function(req,res, next){
    user.render(req,res,null);
});

router.post("/login",function(req,res, next){
    if(!req.body.email){
        user.render(req,res,"Preencha o campo email");
    }

    else if(!req.body.password){
        user.render(req,res,"Preencha o campo password");
    }

    else{
        user.login(req.body.email,req.body.password)
        .then(user => {
            req.session.user = user;
            res.redirect("/admin");
        })
        .catch(err => {
            user.render(req,res,err.message || err);
        });
    }
   
})

router.get("/contacts",function(req,res, next){
    res.render('admin/contacts',admin.getParams(req));
});


router.get("/emails",function(req,res, next){
    res.render('admin/emails',admin.getParams(req));
});

router.get("/menus",function(req,res, next){
    res.render('admin/menus',admin.getParams(req));
});

router.get("/reservations",function(req,res, next){
    res.render('admin/reservations',admin.getParams(req,{
        date:{}
    }));
});

router.get("/users",function(req,res, next){
    res.render('admin/users',admin.getParams(req));
});



module.exports = router;