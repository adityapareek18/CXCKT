"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var SessionModel = (function () {
    function SessionModel(sessionModel) {
        this._sessionModel = sessionModel;
    }
    Object.defineProperty(SessionModel.prototype, "name", {
        get: function () {
            return this._sessionModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionModel.prototype, "desc", {
        get: function () {
            return this._sessionModel.desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionModel.prototype, "ddate", {
        get: function () {
            return this._sessionModel.ddate;
        },
        enumerable: true,
        configurable: true
    });
    return SessionModel;
}());
Object.seal(SessionModel);
module.exports = SessionModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9TZXNzaW9uTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBSUg7SUFJSSxzQkFBWSxZQUEyQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsc0JBQUksOEJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUwsbUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQixpQkFBVSxZQUFZLENBQUMiLCJmaWxlIjoiYXBwL21vZGVsL1Nlc3Npb25Nb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQgSVNlc3Npb25Nb2RlbCA9IHJlcXVpcmUoJy4vaW50ZXJmYWNlcy9TZXNzaW9uTW9kZWwnKTtcclxuXHJcbmNsYXNzIFNlc3Npb25Nb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Vzc2lvbk1vZGVsOiBJU2Vzc2lvbk1vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25Nb2RlbDogSVNlc3Npb25Nb2RlbCkge1xyXG4gICAgICAgIHRoaXMuX3Nlc3Npb25Nb2RlbCA9IHNlc3Npb25Nb2RlbDtcclxuICAgIH1cclxuICAgIGdldCBuYW1lICgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXNzaW9uTW9kZWwubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzYyAoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbk1vZGVsLmRlc2M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRkYXRlICgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbk1vZGVsLmRkYXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuT2JqZWN0LnNlYWwoU2Vzc2lvbk1vZGVsKTtcclxuZXhwb3J0ID0gIFNlc3Npb25Nb2RlbDsiXX0=
