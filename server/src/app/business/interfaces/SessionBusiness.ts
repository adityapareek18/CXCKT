/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import ISessionModel = require("./../../model/interfaces/SessionModel");

interface HeroBusiness extends BaseBusiness<ISessionModel> {

}
export = HeroBusiness;