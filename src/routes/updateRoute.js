var express = require('express')
const updaterouter = express.Router();


function router(nav){
   
            
      
    updaterouter.route('/').get
    ((req,res)=>{
        res.render('update',{nav});
    });
    return updaterouter
}
module.exports = router;

