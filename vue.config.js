// let px2rem = require('postcss-px2rem');
module.exports = {
    publicPath: "./", // 公共路径(必须有的)
    outputDir: "dist", // 输出文件目录
    // assetsDir: "static", //静态资源文件名称
    lintOnSave: false,
    productionSourceMap: false, //去除打包后js的map文件
    devServer: {
        // host: 'localhost',
        // port: 8099,
        proxy: {
            '/api': {
                target: 'http://m.kugou.com',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
            // '/mon': {
            //     target: 'http://www.monmallcn.com/api',// 要跨域的域名
            //     changeOrigin: true, // 是否开启跨域
            //     pathRewrite: {
            //         '^/mon': '/'
            //     }
            // }
        }
    },
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 // 设计稿宽度的1/10，根据原型图给出的尺寸标注来。我这里的原型图总宽度是375
    //                 px2rem({remUnit: 75}),
    //             ],
    //         },
    //     },
    // },
};

// module.exports = {
// 	    publicPath: "./", // 公共路径(必须有的)
// 	    outputDir: "dist", // 输出文件目录
// 	    // assetsDir: "static", //静态资源文件名称
// 	    lintOnSave: false,
// 	    productionSourceMap: false, //去除打包后js的map文件
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://m.kugou.com',
//                 changeOrigin: true,
//                 ws: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         }
//     }
// }