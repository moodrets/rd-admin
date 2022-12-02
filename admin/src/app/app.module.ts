import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MainMenuComponent } from 'src/app/common/components/main-menu/main-menu.component'
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { PagesComponent } from './pages/pages/pages.component'
import { HeaderComponent } from './common/components/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        MainLayoutComponent,
        PagesComponent,
        LoginPageComponent,
        HeaderComponent,
        NotFoundPageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
