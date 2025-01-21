import express from 'express';
import {addData, getData } from './controller.js';

const route = express.Router();

route.post('/create',addData);
route.get('/getData',getData);


export default route;