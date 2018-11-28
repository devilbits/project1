var express = require('express')
const viewrouter = express.Router();


function router(nav){
   
            
      
    viewrouter.route('/').get
    ((req,res)=>{
        res.render('view',{nav});
    });
    return viewrouter
}
module.exports = router;

