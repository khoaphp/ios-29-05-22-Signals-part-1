module.exports = function(app){

    app.io.on("connection", function(socket){
        console.log("New connection: "  + socket.id);

        socket.on("disconnect", function(){
            console.log("A socket is discoonected: " + socket.id);
        });
    });

    var runningMan = function(number){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                number = number + 1;
                console.log(number);
                app.io.sockets.emit("server-send-number", number);
                resolve(number);
            }, 1000);
        });
    }

    run(0);

    function run(number){
        runningMan(number).then((newNumber)=>{
            run(newNumber);
        });
    }

    app.get("/admin", function(req, res){
        res.render("admin");
    });

}