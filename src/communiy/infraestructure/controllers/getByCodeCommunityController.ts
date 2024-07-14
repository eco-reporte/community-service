import { Request, Response } from "express";
import { GetByCodeCommunityUseCase } from "../../application/getByCodeCommunityUseCase";

export class GetByCodeCommunityController {
    constructor(private useCase: GetByCodeCommunityUseCase) {}

    async getByCodeCommunity(request: Request, response: Response): Promise<void> {
        const { code } = request.params;
        const community = await this.useCase.getByCode(code);
        response.status(200).send(community);
    }
}
