import { enableProdMode } from '@angular/core';//关闭angular的开发者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//告诉angular用什么模块启动应用

import { AppModule } from './app/app.module';//主模块
import { environment } from './environments/environment';//angular多环境的支持

if (environment.production) {//如果是生产环境，则关闭开发者模式
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
