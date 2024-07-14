import express from 'express';
import { createCommunityController, getByCodeCommunityController } from '../dependencies';

export const communityRoutes = express.Router();

communityRoutes.post('/create', (request, response) => {
    createCommunityController.createCommunity(request, response);
});

communityRoutes.get('/getByCode/:code', (request, response) => {
    getByCodeCommunityController.getByCodeCommunity(request, response);
});