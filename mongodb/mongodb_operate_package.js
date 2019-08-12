const {
    MongoClient,
    ObjectID
} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = '9527';

//连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err) {
                reject(err)
                throw err;
            } else {
                resolve(client);
            }
        })
    })
}

//查找
const find = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        let db = client.db(dbName);
        //选中表
        let collection = db.collection(table);
        collection.find(params).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        })
        //关闭连接
        client.close();
    });
}

//增加
const insert = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        let db = client.db(dbName);
        let collection = db.collection(table);
        collection.insert(params, function (err, docs) {
            if (err) {
                reject(err);
            }
            resolve(docs);
        })
    })
    client.close();
}

//修改
const update = (table, index, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        let db = client.db(dbName);
        let collection = db.collection(table);
        collection.update(index, params, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        })
        client.close();
    })
}

//删除
const remove = (table, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        let db = client.db(dbName);
        let collection = db.collection(table);
        collection.remove(params, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        })
        client.close();
    })
}
module.exports = {
    connect,
    find,
    insert,
    update,
    remove,
    ObjectID
}