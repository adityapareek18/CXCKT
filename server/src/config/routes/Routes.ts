/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import SessionRoutes = require('../routes/SessionRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new SessionRoutes().routes);
        
        return app;
    }
}
export = Routes;