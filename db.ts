import * as mongoose from 'mongoose';

const URL = 'mongodb://admin:Secret123!@ds035836.mlab.com:35836/cooldesk';

class Database {
    public static connect(){
        mongoose.connect(URL);

        let db = mongoose.connection;
        db.on('error', function(){
            console.log('connection error');
        });
        db.once('open', function(){
            console.log('connected to database!!!');
        })
    }
}

export default Database;
