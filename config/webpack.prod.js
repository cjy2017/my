const path = require('path')
const commonConfig = require('./webpack.common')
const {merge} = require('webpack-merge')
const prodConfig = {
    mode:'production',
    output:{
        filename:'bundle.[chunkhash].js',
        path:path.join(__dirname,'../','dist'),
        clean:true
    }
}

module.exports = merge(commonConfig,prodConfig)