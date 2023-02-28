const path = require('path')
const VueLoader = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    entry:'./src/main.js',
    //设置别名
    resolve:{
        alias:{
            '@':path.join(__dirname,'src')
        }
    },
    //这个配置项是我们运行打包时出现的警告，提示我们打包文件过大，，这里是我们的demo 配置练习，我们这里进行这样一个配置就不会出现警告啦。
    performance:{
        hints:'warning',// 枚举 false关闭
        maxEntrypointSize:100000000,//最大入口文件大小
        maxAssetSize:100000000,// 最大资源文件大小
        // assetFilter:function(assetFileName){//只给出js文件的性能提示
        //     return assetFileName.endWith('.js')
        // }
    },
    //添加模块
    module:{
        rules:[
            {//配置。vue的解析规则
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {//配置css的解析规则
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            }
        ],
    },
    devtool:'inline-source-map',//错误追踪工具
    plugins:[
        new VueLoader.VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./public/index.html'
        }),
        AutoImport({resolvers: [ElementPlusResolver()],}),
        Components({resolvers: [ElementPlusResolver()],}),
    ],
    devServer:{
        static:'./dist'
    }
}
