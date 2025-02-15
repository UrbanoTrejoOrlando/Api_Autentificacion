const express = require("express");
const cors = require("cors");
const PORT = 3000;
const {users} = require("./data");

// Crear la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    // res.send("Hola mundo desde express")
    // res.json({mensaje:"Hola desde express unsando JSON"})
    res.json(users)
})

app.post("/login",(req,res)=>{
    const{username, password} = req.body;
    const user = user.find(
        (usr)=> user.username == username &&
        usr.password == password
        );
    if (user){
        res.status(200).json({token:
            `token-falso-${user.id}`});
    }else{
        res.status(401).json
        ({error:"Usuario no valido"});
    }
});


//Middleware
const validarToken = (req,res,next)=>{
    //const {token} = req.body;
    const token = req.headers.authorization;
    if (token){
        if(token.startsWith("token-falso-"))
        next();
        res.status(403).json({message:"Acceso denegado token invalido"});

    }else {
        res.status(403).json({message:"Acceso denegado por falta de autorizacion"})
    }

}


app.get("/saludo-protegido",validarToken,(req,res)=>{
    res.json({message:"Saludo protegido"});
})



app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});

