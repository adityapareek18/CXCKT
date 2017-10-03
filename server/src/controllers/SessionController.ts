/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import SessionBusiness = require("./../app/business/SessionBusiness");
import IBaseController = require("./BaseController");
import IHeroModel = require("./../app/model/interfaces/SessionModel");

class SessionController implements IBaseController <SessionBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var session: ISessionModel = <ISessionModel>req.body;
            var sessionBusiness = new SessionBusiness();
            sessionBusiness.create(session, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var session: ISessionModel = <ISessionModel>req.body;
            var _id: string = req.params._id;
            var sessionBusiness = new SessionBusiness();
            sessionBusiness.update(_id, session, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var sessionBusiness = new SessionBusiness();
            sessionBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var sessionBusiness = new SessionBusiness();
            sessionBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var sessionBusiness = new SessionBusiness();
            sessionBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = SessionController;