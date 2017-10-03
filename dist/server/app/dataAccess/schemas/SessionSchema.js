"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var SessionSchema = (function () {
    function SessionSchema() {
    }
    Object.defineProperty(SessionSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
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
        },
        enumerable: true,
        configurable: true
    });
    return SessionSchema;
}());
var schema = mongooseConnection.model("Sessions", SessionSchema.schema);
"";
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvU2Vzc2lvblNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCwwQ0FBNkM7QUFHN0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFvQkEsQ0FBQztJQWxCRyxzQkFBVyx1QkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksRUFBRztvQkFDSCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLElBQUk7b0JBQ1YsUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLG9CQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQUNELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBZ0IsVUFBVSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RSxFQUFFLENBQUE7QUFBbEIsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6ImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvU2Vzc2lvblNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoJy4uL0RhdGFBY2Nlc3MnKTtcclxuaW1wb3J0IElTZXNzaW9uTW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1Nlc3Npb25Nb2RlbFwiKTtcclxuXHJcbnZhciBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcclxudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xyXG5cclxuY2xhc3MgU2Vzc2lvblNjaGVtYSB7XHJcblxyXG4gICAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xyXG4gICAgICAgIHZhciBzY2hlbWEgPSAgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgICAgICAgICAgbmFtZSA6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc2M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2NoZW1hO1xyXG4gICAgfVxyXG59XHJcbnZhciBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWw8SVNlc3Npb25Nb2RlbD4oXCJTZXNzaW9uc1wiLCBTZXNzaW9uU2NoZW1hLnNjaGVtYSk7XHJcbmV4cG9ydCA9IHNjaGVtYTtcIlwiIl19
