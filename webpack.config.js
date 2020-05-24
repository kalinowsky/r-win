const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const distPath = path.resolve(__dirname, "dist")
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default
const styledComponentsTransformer = createStyledComponentsTransformer()

const nodeEnv = process.env.NODE_ENV || "dev"
const dotEnvPath = path.resolve(__dirname, nodeEnv === "testing" ? ".testing.env" : ".env")

const commonPlugins = [
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "public"), to: `${distPath}/public` }]),
    new Dotenv({ systemvars: true, path: dotEnvPath }),
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html"
    })
]

const configBase = {
    entry: {
        index: [path.resolve("src/index.tsx")]
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].[chunkhash].js",
        path: distPath
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                hack: "true; @import '" + path.resolve("src/components/theme/antdCustom.less") + "';"
                            },
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer]
                    }),
                    transpileOnly: true
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|otf|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets"
                        }
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/, /dist/, /lib/]
            }
        ]
    },
    optimization: {
        splitChunks: {
            minSize: 0,
            maxInitialRequests: Infinity,
            cacheGroups: {
                default: false,
                firebase: {
                    test: /[\\/]node_modules[\\/](((@firebase)).*)[\\/]/,
                    name: "firebase",
                    chunks: "all"
                },
                antd: {
                    test: /[\\/]node_modules[\\/](((antd)).*)[\\/]/,
                    name: "antd",
                    chunks: "all"
                },
                antdIcons: {
                    test: /[\\/]node_modules[\\/](((@ant-design)).*)[\\/]/,
                    name: "antdIcons",
                    chunks: "all"
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]((?!(@firebase|antd|@ant-design)).*)[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}

const dev = {
    mode: "development",
    watch: true,
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 2444,
        historyApiFallback: true
    },
    devtool: "source-map", //, "cheap-module-eval-source-map"], // use eval for faster builds/poor debugging,
    entry: {
        index: [
            "react-hot-loader/patch",
            // "webpack-hot-middleware/client?reload=true",
            ...configBase.entry.index
        ]
    },

    plugins: [...commonPlugins, new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
}

const prod = {
    mode: "production",
    plugins: commonPlugins,
    optimization: {
        ...configBase.optimization,
        minimize: true
    }
}

module.exports = Object.assign(configBase, nodeEnv == "production" ? prod : dev)
