/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import ISessionModel = require("./../../model/interfaces/SessionModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class SessionSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            },
            ddate: {
                type: Date,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<ISessionModel>("Sessions", SessionSchema.schema);
export = schema;""