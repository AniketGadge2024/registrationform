const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors(
    {
        origin:[],
        methods:["POST"],
        credentials:true
    }
));
app.use(express.json());


const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',   
    user: 'sql12765564',                
    password: 'wad5NVPLlP',            
    database: 'sql12765564',            
   
})


app.post('/sql12765564',(req,res)=>{
    const sql = "INSERT INTO test(`name`,`fatherorhusband`,`mothername`,`address`,`TownorCity`,`PinCode`,`District`,`State`,`std`,`Tel`,`Mobile`,`email`,`Adharcard`,`dob`,`Gender`,`Nationality`,`OCIorPIO`,`applyfor`,`domicile`,`Religion`,`linguisticMinority`,`sscpassingyear`,`sscstate`,`ssclanguage`,`hscstate`,`hscDistrict`,`hscpassingyear`,`hscexamequivalent`,`hscRollNo`,`Reseravationstates`,`CasteValidity`,`certificateNumber`,`castcertificateDistrict`,`NonCreamyLayer`) Values(?)";
    const values = [
        req.body.name,
        req.body.fatherorhusband,
        req.body.mothername,

        req.body.address,
        req.body.TownorCity,
        req.body.PinCode,
        req.body.District,

        req.body.State,
        req.body.std,
        req.body.Tel,

        req.body.Mobile,
        req.body.email,

        req.body.Adharcard,
        req.body.dob,
        req.body.Gender,
        req.body.Nationality,
        req.body.OCIorPIO,
        req.body.applyfor,
        req.body.domicile,
        req.body.Religion,

        req.body.linguisticMinority,
        req.body.sscpassingyear,
        req.body.sscstate,
        req.body.ssclanguage,
        req.body.hscstate,
        req.body.hscDistrict,
        req.body.hscpassingyear,

        req.body.hscexamequivalent,
        req.body.hscRollNo,
        req.body.Reseravationstates,

        req.body.CasteValidity,
        req.body.certificateNumber,
        req.body.castcertificateDistrict,
        req.body.NonCreamyLayer,

        


        
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(3001,()=>{
    console.log("listening...");
})