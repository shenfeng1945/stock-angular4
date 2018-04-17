import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [//声明组件，指定管道
    AppComponent
  ],
  imports: [//声明了要正常运转，还需要什么东西。就是AppModule还依赖的其他模块
    BrowserModule//跑在浏览器上的模块，必选
  ],
  providers: [],//声明服务
  bootstrap: [AppComponent]//声明模块的主组件
})
export class AppModule { }
