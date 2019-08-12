var express = require('express');
var router = express.Router();
var {
    find,
    update,
    ObjectID
} = require('./mongodb_operate_package');

// 解析请求体的模块
// var bodyParser = require('body-parser');
// var app = express();
// // 该app对象调用其他模块来去处理请求和响应
// // app.use全局使用
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use((req, res, next) => {
//     // 全局添加
//     res.append('Access-Control-Allow-Origin', '*');
//     next();
// })
/* GET users listing. */
// app.get('/', async (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     let data = await find('newList', {

//     })
//     // console.log(data)
//     res.json(data);
// })

router.post("/changeStatus", async (req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '');
    const param = req.body.status.replace('')
    const index = req.body.index.replace('')
    console.log(param,index)
    let result = await update("newList", index,param)
    res.json(result);
})

router.get('/newlist', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    let data = await find('newList', {

    })
    res.json(data);
});

//查询商品
router.get('/searchShop', async function (req, res, next) {
    let lsx_data=req.query;
    var ifhope = lsx_data.ifhope
    
    if(ifhope=="选项2"){
        lsx_data.ifhope = true
    }else{
        lsx_data.ifhope = false
    }
    console.log(lsx_data.ifhope)
    res.header('Access-Control-Allow-Origin', '*');
    let search_data = await find('newList', {
        'mingchen1':lsx_data.mingchen,
        'ifhope': lsx_data.ifhope
    })
    console.log(search_data)
    res.json(search_data);
});

//修改序号
router.get('/changeXuhao', async function (req, res, next) {
    var new_huohao = req.query.huohao+'';
    var new_xuhao = req.query.xuhao*1;
    // console.log(new_huohao,new_xuhao)
    res.header('Access-Control-Allow-Origin', '*');
    await update('newList',{'huohao':new_huohao },{'xuhao':new_xuhao },async data=>{
        //返回新数据
        let changeHuohao_data = await find('newList', {

        })
        res.json(changeHuohao_data);
    })

});

module.exports = router;