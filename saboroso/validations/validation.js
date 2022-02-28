module.exports = {
    reserve(body,req,res,reservations){
        if(!body.name){
            reservations.render(req,res,"Digite o nome");
            return false;
        }else if(!body.email){
            reservations.render(req,res,"Digite o email");
            return false;
        }else if(!body.people){
             reservations.render(req,res,"Informe o numero de pessoas");
             return false;
        }else if(!body.date){
            reservations.render(req,res,"Informe a data");
            return false;
        }else if(!body.time){
            reservations.render(req,res,"Informe a hora");
            return false;
        }else{
            return true;
        }
    }
}