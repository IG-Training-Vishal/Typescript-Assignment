const path=require('path');

module.exports={
    mode: 'development',
    entry: './ts/index.ts',
    module:{
        rules:[{
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/node_modules/
        }]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname,'master') 
    }
}