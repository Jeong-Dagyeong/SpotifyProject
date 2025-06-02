const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // 프로젝트가 시작되는 파일을 지정
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        // 다양한 파일 형식을 처리하기 위한 규칙을 정의
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'], // css 파일 처리
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
              },
            },
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]?ver=[hash]',
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]?ver=[hash]',
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].js?ver=[hash]',
      filename: '[name].js?ver=[hash]',
      publicPath: '/',
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    optimization: {
      minimize: isProduction,
    },
    plugins: [
      // 빌드 프로세스를 도와주는 플러그인
      new CleanWebpackPlugin(), // 이전 빌드 파일을 삭제
      new HtmlWebpackPlugin({
        // HTML 파일을 생성하고, 번들링된 자바스크립트를 자동으로 포함시킴
        template: path.resolve(__dirname, 'src', 'index.html'), // 이거 만들어줘야함
      }),
      new Dotenv({
        allowEmptyValues: true,
        systemvars: true,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public/_redirects'),
            to: path.resolve(__dirname, 'dist/_redirects'), // ✅ 디렉토리가 아니라 정확한 "파일 경로"로 지정
            toType: 'file', // ✅ 파일임을 명시
          },
        ],
      }),
    ],
  }
}
