const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: ['./src/main.js', './src/assets/scss/main.scss']
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            '@/views': path.resolve(__dirname, 'src/views'),
            '@/modules': path.resolve(__dirname, 'src/modules'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/store': path.resolve(__dirname, 'src/store'),
        },
        extensions: ['.vue', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.vue$/,
            loader: ['vue-loader']
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }, {
                loader: 'postcss-loader',
                options: {
                    config: {
                        path: 'postcss.config.js'
                    }
                }
            }]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'app.vendors',
                    chunks: 'all'
                },
            }
        },
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin([{
            from: './src/assets/imgs',
            to: './imgs'
        }, {
            from: './src/assets/fonts',
            to: './fonts'
        }]),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/template/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ]
};