module.exports = {
  // 测试文件中引入的文件类型推断
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // 测试文件转换插件声明
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 转换忽略
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  // 特殊符号映射， eg：@ ~等vue特殊路径的 映射
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // jest快照测试vue文件，格式化需要的格式化的插件
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // 测试命令执行时查找匹配的测试文件正则匹配
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  // jest测试模拟环境的地址
  testURL: 'http://localhost/',
  // jest测试监听提示插件
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}