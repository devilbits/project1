var express = require('express')
const addrouter = express.Router();


function router(nav){
   
            
      
    addrouter.route('/').get
    ((req,res)=>{
        res.render('add',{nav});
    });
    return addrouter
}
module.exports = router;

