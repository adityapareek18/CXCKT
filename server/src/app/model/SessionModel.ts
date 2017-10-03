/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ISessionModel = require('./interfaces/SessionModel');

class SessionModel {

    private _sessionModel: ISessionModel;

    constructor(sessionModel: ISessionModel) {
        this._sessionModel = sessionModel;
    }
    get name (): string {
        return this._sessionModel.name;
    }

    get desc (): string {
        return this._sessionModel.desc;
    }

    get ddate (): Date {
        return this._sessionModel.ddate;
    }
    
}
Object.seal(SessionModel);
export =  SessionModel;