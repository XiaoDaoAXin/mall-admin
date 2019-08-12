const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
//数据库
const dbName = '9527';

//连接
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    assert.equal(null, err);
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    //连接表名nameinfo
    const collection = db.collection('nameinfo');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
    })
    //关闭数据库连接
    client.close();
})