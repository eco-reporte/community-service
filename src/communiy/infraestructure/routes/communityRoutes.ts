import express from 'express';
import { createCommunityController } from '../dependencies';

export const communityRoutes = express.Router();

communityRoutes.post('/create', (request, response) => {
    createCommunityController.createCommunity(request, response);
});