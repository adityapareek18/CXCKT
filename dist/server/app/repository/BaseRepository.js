"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var mongoose = require("mongoose");
var RepositoryBase = (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };
    RepositoryBase.prototype.retrieve = function (callback) {
        this._model.find({}, callback);
    };
    RepositoryBase.prototype.update = function (_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    };
    RepositoryBase.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) { return callback(err, null); });
    };
    RepositoryBase.prototype.findById = function (_id, callback) {
        this._model.findById(_id, callback);
    };
    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RepositoryBase;
}());
module.exports = RepositoryBase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQU1ILG1DQUFzQztBQUV0QztJQUlJLHdCQUFhLFdBQThDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQVEsSUFBTyxFQUFFLFFBQTJDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFVLFFBQTJDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFRLEdBQTRCLEVBQUUsSUFBTyxFQUFFLFFBQTJDO1FBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFRLEdBQVcsRUFBRSxRQUEwQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFFbEYsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBVSxHQUFXLEVBQUUsUUFBeUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHTyxtQ0FBVSxHQUFsQixVQUFvQixHQUFXO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBRUQsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCBJUmVhZCA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvUmVhZFwiKTtcclxuaW1wb3J0IElXcml0ZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV3JpdGVcIik7XHJcbmltcG9ydCBJSGVyb01vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9TZXNzaW9uTW9kZWxcIik7XHJcblxyXG5pbXBvcnQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jbGFzcyBSZXBvc2l0b3J5QmFzZTxUIGV4dGVuZHMgbW9uZ29vc2UuRG9jdW1lbnQ+IGltcGxlbWVudHMgSVJlYWQ8VD4sIElXcml0ZTxUPiB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9kZWw6IG1vbmdvb3NlLk1vZGVsPG1vbmdvb3NlLkRvY3VtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoc2NoZW1hTW9kZWw6IG1vbmdvb3NlLk1vZGVsPG1vbmdvb3NlLkRvY3VtZW50Pikge1xyXG4gICAgICAgIHRoaXMuX21vZGVsID0gc2NoZW1hTW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlIChpdGVtOiBULCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwuY3JlYXRlKGl0ZW0sIGNhbGxiYWNrKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0cmlldmUgKGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLl9tb2RlbC5maW5kKHt9LCBjYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKF9pZDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIGl0ZW06IFQsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLl9tb2RlbC51cGRhdGUoe19pZDogX2lkfSwgaXRlbSwgY2FsbGJhY2spO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUgKF9pZDogc3RyaW5nLCBjYWxsYmFjazooZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLl9tb2RlbC5yZW1vdmUoe19pZDogdGhpcy50b09iamVjdElkKF9pZCl9LCAoZXJyKSA9PiBjYWxsYmFjayhlcnIsIG51bGwpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5SWQgKF9pZDogc3RyaW5nLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogVCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuX21vZGVsLmZpbmRCeUlkKCBfaWQsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0b09iamVjdElkIChfaWQ6IHN0cmluZykgOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCB7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLmNyZWF0ZUZyb21IZXhTdHJpbmcoX2lkKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0ID0gUmVwb3NpdG9yeUJhc2U7Il19
