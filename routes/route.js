import express from 'express';
import {addData, deleteData, getData, getDataById, updateData } from '../controllers/controller.js';

const route = express.Router();

route.post('/create',addData);
route.get('/getData',getData);
route.get('/getDataById',getDataById);
route.put('/updateData',updateData);
route.delete('/deleteData',deleteData);

export default route;