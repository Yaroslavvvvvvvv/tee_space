import { FlatCompat } from '@eslint/eslintrc'
import antfu from '@antfu/eslint-config'

const compat = new FlatCompat()

export default antfu({
  rules: {
    'ts/no-explicit-any': 'error',
  },
}, ...compat.extends('plugin:tailwindcss/recommended'))
