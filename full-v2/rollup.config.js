import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias'
import ttypescript from 'ttypescript'
import babel from '@rollup/plugin-babel'

import path from 'path'

import pkg from './package.json'

export default {
  input: ['src/index.ts'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    alias({
      entries: [
        { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
        { find: '@core', replacement: path.resolve(__dirname, 'src/core') },
        { find: '@extensions', replacement: path.resolve(__dirname, 'src/extensions') },
        { find: '@react', replacement: path.resolve(__dirname, 'src/react') },
      ]
    }),
    babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react']
    }),
    typescript({
      typescript: ttypescript
    }),
    postcss(),
  ],
}
