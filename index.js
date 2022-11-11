const express=require('express');
const cors=require('cors');
var bodyparser=require('body-parser');
const mycon=require('mysql');
const multer=require('multer');
const {request,response}= require('express');

const upload=multer();

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(upload.array());
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

var c=mycon.createConnection({
    host:"localhost",
    port:'3306',
    user:"root",
    password:"Kgisl@123",
    database:"res"
});
c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('database connected');}
})

app.post('/Signup',(request,response)=>{
    let role= request.body.role;
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.phone;
    let password = request.body.password;



   let sql1 = 'insert into signup(username,password,name,email,phone,role,status) values (?,?,?,?,?,?,?)';
   let sql2 = 'insert into employee_details(username,password,name,email,phone,role,status) values (?,?,?,?,?,?,?)';
  
   c.query(sql1,[email,password,name,email,phone,role,0],(err,res)=>{
        if(err){
            let s = {"status":"Signup_Error"};
            response.send(s);
        }
        else{
            c.query(sql2,[email,password,name,email,phone,role,0],(err1,res1)=>{
                if(err1){
                    let s = {"status":"Signin_Error"};
                    response.send(s);
                }
                else{
                     
                    let s = {"status":"Signup_successfully"};
                    response.send(s);

                }
            })
        }
    })
});
        
        
   



app.post('/Signin',(request,response)=>{

    let username = request.body.username;
    let password = request.body.password;

    let sql = 'select * from signup where username=?';

    c.query(sql,[username],(err,res)=>{
        if(err){
            let s = {"status":"username_error"};
            response.send(s);
        }
        else if(res.length > 0){
            let username1 = res[0].username;
            let password1 = res[0].password;
            let id = res[0].id;
            let role = res[0].role;

            if(username1 === username && password1 === password){
                let s = {"status":"Login_Successfully","id":id,"role":role};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid_Login"};
                response.send(s);
            }
        }
         else{
            let s = {"status":"username_error"};
          response.send(s);
         }
    })

});
app.post('/Userdetails',(request,response)=>{
    let userid = request.body.userid;

    let sql = 'select * from signup where id=?';

    c.query(sql,[userid],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let name = res[0].name;
            let s = {"status":name};
            response.send(s);
        }
    })

});


app.post('/Aemp',(request,response)=>{
    let name=request.body.name;
    let empid = request.body.empid;
    let password=request.body.empassword;
    let email=request.body.empemail;
    let phone=request.body.emphone;
    let role=request.body.role;

    let sql1 = 'insert into signup(username,password,name,email,phone,role,status) values (?,?,?,?,?,?,?)';
   let sql2 = 'insert into employee_details(username,password,name,email,phone,role,status) values (?,?,?,?,?,?,?)';
  
   c.query(sql1,[empid,password,name,email,phone,role,0],(err,res)=>{
        if(err){
            let s = {"status":"Signup_Error"};
            response.send(s);
        }
        else{
            c.query(sql2,[empid,password,name,email,phone,role,0],(err1,res1)=>{
                if(err1){
                    let s = {"status":"Signin_Error"};
                    response.send(s);
                }
                else{
                     
                    let s = {"status":"inserted"};
                    response.send(s);

                }
            })
        }
    })

});


app.listen(3004);