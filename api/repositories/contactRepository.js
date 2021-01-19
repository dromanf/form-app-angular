const MongoClient = require('mongodb').MongoClient
const DB = `comments_db`;
const COLLECTION = `comments`
const USER_NAME = process.env.USER_DB || 'root';
const PASSWORD = process.env.PASSWORD_DB || 'example';

const CONNECTION_STRING = `mongodb://${USER_NAME}:${PASSWORD}@localhost:27017/?authSource=admin`

const persistComment = (comment) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(CONNECTION_STRING,  (err, client) => {
            if (!!err) {
                reject(err);
            } else {
                const db = client.db(DB);
                db.collection(COLLECTION).insertOne(comment, (err, result) => {
                    if(err) reject(err);
                    client.close();
                    resolve(result);
                });
            }

        })
    })
}


module.exports = {persistComment}
