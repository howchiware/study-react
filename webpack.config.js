const path = require('path');

module.exports = {
  entry: './src/index.js', // 애플리케이션 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들 파일 출력 위치
    filename: 'main.js', // 출력 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // .js 또는 .jsx 파일 처리
        exclude: /node_modules/, // node_modules 제외
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 확장자 생략 가능
  },
  devServer: {
    static: path.join(__dirname, 'public'), // 정적 파일 위치
    compress: true, // 압축 활성화
    port: 8080, // 개발 서버 포트
  },
};
