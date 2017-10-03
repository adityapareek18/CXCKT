/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import SessionController = require("./../../controllers/SessionController");

var router = express.Router();
class HeroRoutes {
    private _sessionController: SessionController;

    constructor () {
        this._sessionController = new SessionController();
    }
    get routes () {
        var controller = this._sessionController;

        router.get("/sessions", controller.retrieve);
        router.post("/sessions", controller.create);
        router.put("/sessions/:_id", controller.update);
        router.get("/sessions/:_id", controller.findById);
        router.delete("/sessions/:_id", controller.delete);

        return router;
    }


}

Object.seal(HeroRoutes);
export = HeroRoutes;