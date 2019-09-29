const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    entry : path.join(__dirname + "/src","/index.js"),//codigo de entrada a convertir por webpack
    output:{//codigo salida webpack + la carpeta y el archivo convertido
        path :path.join( __dirname + "/src","dist"),
        filename: 'bundle.js'//
    },
    module:{
        rules:[
            {
                test:/\.js|.jsx$/,
                use:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    },
    devServer:{
        port:"4000"
    },
    resolve:{
        
        extensions:[ '.js' , '.jsx' ]
        
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}