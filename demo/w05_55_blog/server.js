import express from "express";
import logger from "morgan";
import path from "path";
import apiCardRouter_55 from "./routes/api/apiCardRouter_55.js";

// import indexRouter from "./routes/index.js"

const app = express();

import dotenv from "dotenv";
dotenv.config();

import db from "./until/database.js"

import cors from "cors"

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(express.static('public'));
app.set('view engine','ejs');

app.use(cors());

// app.use('/',(req,res,next) => {
//     //res.send('Hello');
//     res.render('index' , {title : 'Express'});
// });
app.use('/api/card_55', apiCardRouter_55);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    if(process.env.DATABASE === 'SUPABASE'){
        console.log(`Connecting SUPABASE PostgreSQL database ${db.options.database}`);
    }else{
        console.log(`Connecting local PostgreSQL database ${db.options.database}`);
    }
    console.log(`Connecting on port: ${port}`);
});