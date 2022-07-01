import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    let user: User;

    try {
      user = this.turnUserAdminUseCase.execute({ user_id });
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }

    return response.status(201).json(user);
  }
}

export { TurnUserAdminController };
