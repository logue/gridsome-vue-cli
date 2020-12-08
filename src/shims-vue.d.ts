declare module '*.vue' {
  import Vue from 'vue';

  // Gridsome fix
  declare module 'vue/types/vue' {
    interface Vue {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      $static: any;
    }
  }
  export default Vue;
}
