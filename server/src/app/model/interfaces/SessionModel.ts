/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface SessionModel extends mongoose.Document {
    name: string;
    desc: string;
    ddate: Date;
}

export = SessionModel;