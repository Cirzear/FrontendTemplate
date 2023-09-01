/**
 * feat：新增功能
 * fix：bug 修复
 * docs：文档更新
 * style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
 * refactor：重构代码(既没有新增功能，也没有修复 bug)
 * perf：性能, 体验优化
 * test：新增测试用例或是更新现有测试
 * build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 * ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 * chore：不属于以上类型的其他类型，比如构建流程, 依赖管理
 * revert：回滚某个更早之前的提交on
 */

// import * as commitlint from '@commitlint/config-conventional'

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 增加新功能
        'fix', // 修复问题/BUG
        'perf', // 优化/性能提升
        'style', // 代码风格相关无影响运行结果的
        'docs', // 文档/注释
        'test', // 测试相关
        'refactor', // 重构
        'build', // 对构建系统或者外部依赖项进行了修改
        'ci', // 对 CI 配置文件或脚本进行了修改
        'chore', // 依赖更新/脚手架配置修改等
        'revert', // 撤销修改
        'wip', // 开发中
        'workflow', // 工作流改进
        'types', // 类型修改
        'release'
      ]
    ],
    // <type> low case
    'type-case': [2, 'always', 'lower-case'],
    // <scope> cannot empty
    'scope-empty': [0, 'never'],
    // <scope> scope
    'scope-case': [0],
    // <subject> disable stop char
    'subject-full-stop': [0, 'never'],
    // <body> start with blank
    'body-leading-blank': [2, 'always'], // body 开始于空白行
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108], // header 字符最大长度为 108
    'subject-empty': [2, 'never'], // subject 不为空
    'type-empty': [2, 'never'], // type 不为空
    'subject-case': [0, 'never']
  }
};
