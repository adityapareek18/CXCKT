"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SessionSchema = require("./../dataAccess/schemas/SessionSchema");
var RepositoryBase = require("./BaseRepository");
var SessionRepository = (function (_super) {
    __extends(SessionRepository, _super);
    function SessionRepository() {
        return _super.call(this, SessionSchema) || this;
    }
    return SessionRepository;
}(RepositoryBase));
Object.seal(SessionRepository);
module.exports = SessionRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L1Nlc3Npb25SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFJSCxxRUFBd0U7QUFDeEUsaURBQW9EO0FBRXBEO0lBQWlDLHFDQUE2QjtJQUMxRDtlQUNJLGtCQUFNLGFBQWEsQ0FBQztJQUN4QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKZ0MsY0FBYyxHQUk5QztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMvQixpQkFBUyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS9TZXNzaW9uUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQgU2Vzc2lvbk1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvU2Vzc2lvbk1vZGVsXCIpO1xyXG5pbXBvcnQgSVNlc3Npb25Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL2ludGVyZmFjZXMvU2Vzc2lvbk1vZGVsXCIpO1xyXG5pbXBvcnQgU2Vzc2lvblNjaGVtYSA9IHJlcXVpcmUoXCIuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9TZXNzaW9uU2NoZW1hXCIpO1xyXG5pbXBvcnQgUmVwb3NpdG9yeUJhc2UgPSByZXF1aXJlKFwiLi9CYXNlUmVwb3NpdG9yeVwiKTtcclxuXHJcbmNsYXNzIFNlc3Npb25SZXBvc2l0b3J5ICBleHRlbmRzIFJlcG9zaXRvcnlCYXNlPElTZXNzaW9uTW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcihTZXNzaW9uU2NoZW1hKTtcclxuICAgIH1cclxufVxyXG5cclxuT2JqZWN0LnNlYWwoU2Vzc2lvblJlcG9zaXRvcnkpO1xyXG5leHBvcnQgPSBTZXNzaW9uUmVwb3NpdG9yeTsiXX0=
