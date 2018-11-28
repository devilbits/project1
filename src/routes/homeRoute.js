var express = require('express')
const homerouter = express.Router();


function router(nav){
   
            
      
    homerouter.route('/').get
    ((req,res)=>{
        res.render('index',{nav});
    });
    return homerouter
}
module.exports = router;

