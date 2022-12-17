import '@umijs/max/typings'

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false

// ref: https://dev.to/isthatcentered/typing-process-env-and-dealing-with-nodeenv-3ilm
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
  }
}
