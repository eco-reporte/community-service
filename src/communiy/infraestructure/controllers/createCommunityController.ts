import { Request, Response } from "express";
import { CreateCommunityUseCase } from "../../application/createCommunityUseCase";


export class CreateCommunityController {
    run: any;
    constructor(private useCase: CreateCommunityUseCase) {}

    async createCommunity(request: Request, response: Response): Promise<void> {
        const { code, name, id } = request.body;
        await this.useCase.createCommunity(code, name, id);
        response.status(201).send();
    }
}
