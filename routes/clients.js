var User = require("../models/user");

module.exports = function(app){

    app.get("/", function(req, res){
        var ngteo = new User({
            username:"teonv",
            password:"123456",
            status:0,      // 0 normal, 1 vip, -1 banned
            registerDate:Date.now()
        });
        res.json(ngteo);
    });

}