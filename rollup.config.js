import typescript from '@rollup/plugin-typescript';
// 压缩
import { terser } from 'rollup-plugin-terser';
// 删除
import clean from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';

import commonjs from '@rollup/plugin-commonjs';

const DIR = 'dist';

export default {
  input: 'src/main.ts',
  output: {
    file: `${DIR}/main.js`,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    clean({ targets: `${DIR}/*` }),
    json(),
    commonjs(),
    // 必须转为cjs的格式
    typescript({
      target: 'es5',
      module: 'ESNext',
    }),
    terser(),
  ],
  // 告诉rollup不要讲第三方模板打包进来
  external: ['lodash', 'loader-utils', 'fs', 'path', 'markdown-it'],
};
