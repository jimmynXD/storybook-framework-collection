// declare module '*.vue' {
//   import { DefineComponent } from '@vue/runtime-core'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
