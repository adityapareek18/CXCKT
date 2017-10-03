"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var express = require("express");
var SessionRoutes = require("../routes/SessionRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new SessionRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGlDQUFvQztBQUdwQyx1REFBMEQ7QUFFMUQsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFcEI7SUFBQTtJQVFBLENBQUM7SUFORyxzQkFBSSwwQkFBTTthQUFWO1lBRUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV6QyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDE1LTA2LTIwMTYuXHJcbiAqL1xyXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5pbXBvcnQgU2Vzc2lvblJvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcy9TZXNzaW9uUm91dGVzJyk7XHJcblxyXG52YXIgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuY2xhc3MgUm91dGVzIHtcclxuXHJcbiAgICBnZXQgcm91dGVzKCkge1xyXG5cclxuICAgICAgICBhcHAudXNlKFwiL1wiLCBuZXcgU2Vzc2lvblJvdXRlcygpLnJvdXRlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFwcDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgPSBSb3V0ZXM7Il19
