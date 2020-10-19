var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));


var apiarios= [{
  "id": "1",
  "nombre": "María Luisa 1",
  "cantidad": 0,
  "debiles": 0,
  "muertas": 0,
  "ubicacion": "Tostado, Santa Fe",
  "coord": "-29.2862, -61.7766",
  "imagen": "../../assets/ML1.png",

    
},
  {
    "id": "2",
    "nombre": "Gramajo",
    "cantidad": 0,
    "debiles": 0,
    "muertas": 0,
    "ubicacion": "Tostado, Santa Fe",
    "coord": "-29.3040, -60.3040",
    "imagen": "../../assets/ML2.png"
    },
    {
      "id": "3",
      "nombre": "Tres Pozos",
      "cantidad": 0,
      "debiles": 0,
      "muertas": 0,
      "ubicacion": "Tostado, Santa Fe",
      "coord": "-29.3040, -60.3040",
      "imagen": "../../assets/ML2.png"
    },
    {
      "id": "4",
      "nombre": "Loma de Loto",
      "cantidad": 0,
      "debiles": 0,
      "muertas": 0,
      "ubicacion": "Tostado, Santa Fe",
      "coord": "-29.3040, -60.3040",
      "imagen": "../../assets/ML2.png"
    },
    {
      "id": "5",
      "nombre": "El Nochero",
      "cantidad": 0,
      "debiles": 0,
      "muertas": 0,
      "ubicacion": "Tostado, Santa Fe",
      "coord": "-29.3040, -60.3040",
      "imagen": "../../assets/ML2.png"
    },
    {
      "id": "6",
      "nombre": "Armonía",
      "cantidad": 0,
      "debiles": 0,
      "muertas": 0,
      "ubicacion": "Tostado, Santa Fe",
      "coord": "-29.3040, -60.3040",
      "imagen": "../../assets/ML2.png"
    },
    
  ]
  



var id = 20;



app.get("/apiarios",function(req,res){
   setTimeout(function(){
 res.send(apiarios);    

        return;
    },2000);
   
   
    
});
app.get("/loquesea",function(req,res){

	 res.send("respuesta");    


   
   
   
    
});

app.get("/apiarios/:id",function(req,res){
  console.log(req.params.id);
    if(req.params.id>0){
      var apiario={};
       apiarios.forEach(item=>{
    
        if(item.id==req.params.id){
        
          apiario= item;
         
        }
      });
      res.send(apiario);
      return; 
     
    }else{
        res.send({'type': 'error'});
        return; 
    }
  
});




app.post("/login",function(req,res){
    setTimeout(function(){
        console.log("Llego al servidor "+JSON.stringify(req.body));
        
       
        if(req.body.email!=undefined && req.body.password!=undefined){
            if(req.body.email==="usuario"&&req.body.password==="1234"){
                console.log("Sale del servidor "+"{'type': 'User'}")
                res.send({'type': 'User'});    
            }else if(req.body.email==="admin"&&req.body.password==="1234"){
                console.log("Sale del servidor "+"{'type': 'Admin'}")
                res.send({'type': 'Admin'});    
            }else{
                console.log("Sale del servidor "+"{'type': 'error'}")
                res.send({'type': 'error'});
            }
            return;
        }
        console.log("Sale del servidor "+"{'type': 'error'}")
        res.send({'type': 'error'});
    },2000);
    
});


app.post("/apiarios",function(req,res){
  console.log(req.body);
    setTimeout(function(){
        if((req.body.nombre!= undefined&&req.body.nombre!= "") &&(req.body.debiles!= undefined) 
			&&  (req.body.debiles!= undefined) && (req.body.muertas!= undefined) 
			&&  (req.body.muertas!= undefined)&& (req.body.ubicacion!= undefined) 
			&&  (req.body.ubicacion!= undefined) && (req.body.coord!= undefined) 
			&&  (req.body.coord!= undefined) && (req.body.imagen!= undefined&&req.body.imagen!= "")){
     
			id = id +1;
       
			
			var data = {"id":id,"nombre":req.body.nombre,"cantidad":req.body.cantidad,"debiles":req.body.debiles,"muertas":req.body.muertas,"ubicacion":req.body.ubicacion,"coord":req.body.coord,"imagen":req.body.imagen};
				productos.push(data);
                res.send(data);    
     
            return;
        }
        res.send({'type': 'error'});
    },2000);
    
});



app.delete("/apiarios/:id",function(req,res){
  console.log(req.params.id);
    setTimeout(function(){
        
       console.log(req.params.id);
        if(req.params.id!= undefined){
	
			for(var i =0;i<apiarios.length;i++){
					if(req.params.id== apiarios[i].id){
						apiarios.splice(i,1);
        	var data = {"type":"ok"};
							res.send(data);    
							return;
					}
				}
			
			

        }
        res.send({'type': 'error'});
    },2000);
    
});

app.listen(3000,function(){
    console.log("Api en el puerto 3000");
});