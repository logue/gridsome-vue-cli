import VueRouter from 'vue-router';
// eslint-disable-next-line node/no-extraneous-import
import { MetaInfo } from 'vue-meta';

export interface ClientContext {
  appOptions: Record<string, unknown>;
  router: VueRouter;
  head: MetaInfo;
}
