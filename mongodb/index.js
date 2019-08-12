const {
    find,
    ObjectId,
    insert,
    update,
    remove
} = require('./mongodb_operate_package');

!(async () => {
    let data = await find('nameinfo', {
        //查询生成id
        //_id: ObjectId('5d31afe878ee6d744495ef53')
        // //查询 id and name
        "name": "657848320@qq.com",
        "psw": "a123456"
    })
    console.log(data);
})()

// !(async () => {
//     let data = await insert('nameinfo',
//         // {
//         //    // 插入一条数据
//         //     "name": "狗蛋",
//         //     "age": 66,
//         // }
//         //插入多条
//         [{
//             'name': '李四',
//             'age': 38,
//         }, {
//             'name': "光头强",
//             'age': 48,
//         }]
//     )
//     console.log(data.ops);
// })()

// !(async () => {
//     let data = await update('nameinfo', {
//         //查询生成id
//         _id: ObjectId('5d31afe878ee6d744495ef53'),
//         //查询 id and name
//     }, {
//         $set: {
//             "name": "大健康发空间",
//             // "age": 30,
//         }
//     })
//     console.log(data);
// })()

// !(async () => {
//     let data = await remove('nameinfo', {
//         "name" : "大健康发空间",
//     })
//     console.log(data);
// })()