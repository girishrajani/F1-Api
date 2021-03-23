const apiRoutes = require('./api_routes')

module.exports= function (app, db){
    apiRoutes(app,db);
}