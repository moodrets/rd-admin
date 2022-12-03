import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MainMenuComponent } from 'src/app/common/components/main-menu/main-menu.component'
import { MainLayoutComponent } from 'src/app/common/layouts/main-layout/main-layout.component'
import { LoginPageComponent } from 'src/app/common/pages/login-page/login-page.component'
import { NotFoundPageComponent } from 'src/app/common/pages/not-found-page/not-found-page.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './common/components/header/header.component'

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        MainLayoutComponent,
        LoginPageComponent,
        HeaderComponent,
        NotFoundPageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
