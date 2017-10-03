/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import SessionModel = require("./../model/SessionModel");
import ISessionModel = require("./../model/interfaces/SessionModel");
import SessionSchema = require("./../dataAccess/schemas/SessionSchema");
import RepositoryBase = require("./BaseRepository");

class SessionRepository  extends RepositoryBase<ISessionModel> {
    constructor () {
        super(SessionSchema);
    }
}

Object.seal(SessionRepository);
export = SessionRepository;