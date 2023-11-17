const expressSession = require('express-session')
const MongoDBStore = require('connect-mongodb-session');


function createSessionStore (){
    const MongoDbStore = MongoDBStore(expressSession);

   const store= new MongoDbStore({
        uri: 'mongodb://localhost:27017',
        databaseName: '30HillsOnlineShop',
        collection: 'sessions'
    })
    return store;
}

function createSessionConfig() {
    return { 
        secret: 'super-secret', 
        resave: false, 
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000 
        }
    }
}
module.exports = createSessionConfig