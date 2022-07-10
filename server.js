var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
var server = require("http").Server(app);
var io = require("socket.io")(server);
app.io = io;
server.listen(3000);

var fs = require("fs");
fs.readFile("./config.json", "utf8", function(err, data){
    if(err){throw err};
    var obj = JSON.parse(data);
    
    //mongoose
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://'+obj.mongodb.username+':'+obj.mongodb.password+'@'+obj.mongodb.server+'/'+obj.mongodb.dbname+'?retryWrites=true&w=majority', function(err){
        if(err){throw err;}else{
            console.log("Mongodb connected successfully.");

            //routes
            require("./routes/clients")(app);
            require("./routes/admin")(app);

        }
    });
});

