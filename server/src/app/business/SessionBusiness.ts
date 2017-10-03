/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import SessionRepository = require("./../repository/SessionRepository");
import ISessionBusiness = require("./interfaces/SessionBusiness");
import ISessionModel = require("./../model/interfaces/SessionModel");
import SessionModel = require("./../model/SessionModel");


class SessionBusiness implements ISessionBusiness {
    private _sessionRepository: SessionRepository;

    constructor () {
        this._sessionRepository = new SessionRepository();
    }

    create (item: ISessionModel, callback: (error: any, result: any) => void) {
        this._sessionRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._sessionRepository.retrieve(callback);
    }

    update (_id: string, item: ISessionModel, callback: (error: any, result: any) => void) {

        this._sessionRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._sessionRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._sessionRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ISessionModel) => void) {
        this._sessionRepository.findById(_id, callback);
    }

}


Object.seal(SessionBusiness);
export = SessionBusiness;