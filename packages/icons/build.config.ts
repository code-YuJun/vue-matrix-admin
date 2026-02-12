/**
 * 专门为 npm 库设计的构建工具,自动输出 ESM + CJS
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  // 每次构建前，先删除 dist 目录
  clean: true,
  // 生成 TypeScript 类型声明文件 (.d.ts)
  declaration: true,
  // 以 src/index.ts 作为入口文件
  entries: ['src/index'],
});