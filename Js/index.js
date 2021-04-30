//云函数入口,需要运行什么脚本自己改名字
exports.main_handler = async (event, context, callback) => {
  try {
    delete require.cache[require.resolve ('./jddj_fruit.js')];
    require ('./jddj_fruit.js');
    delete require.cache[require.resolve('./jddj_bean.js')];
    require('./jddj_bean.js');
    delete require.cache[require.resolve ('./jddj_fruit_collectWater.js')];
    require ('./jddj_fruit_collectwater.js');
    delete require.cache[require.resolve ('./jddj_plantBeans.js')];
    require ('./jddj_plantBeans.js');
    delete require.cache[require.resolve ('./jddj_getPoints.js')];
    require ('./jddj_getPoints.js');
  } catch (e) {
    console.error (e)
  }
}
