import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

import routes from './routes/routes.js';

app.use('/', routes);

const CONNECTION_URL='';

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(app.listen(PORT,()=>{console.log(`Server running at PORT: ${PORT}`)}))
.catch((error)=>console.log(error.message));

//app.listen(PORT, ()=>console.log(`Server is running on PORT : ${PORT}`));
