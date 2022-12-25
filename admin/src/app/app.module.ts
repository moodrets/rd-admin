import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MainMenuComponent } from 'src/app/common/components/main-menu/main-menu.component'
import { MainLayoutComponent } from 'src/app/common/layouts/main-layout/main-layout.component'
import { LoginPageComponent } from 'src/app/common/pages/login-page/login-page.component'
import { NotFoundPageComponent } from 'src/app/common/pages/not-found-page/not-found-page.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './common/components/header/header.component'
import { MainPageComponent } from './common/pages/main-page/main-page.component'
import { OffcanvasComponent } from './common/components/offcanvas/offcanvas.component'
import { OffcanvasService } from 'src/app/common/services/OffcanvasService'

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        MainLayoutComponent,
        LoginPageComponent,
        HeaderComponent,
        NotFoundPageComponent,
        MainPageComponent,
        OffcanvasComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
    providers: [OffcanvasService],
    bootstrap: [AppComponent],
})
export class AppModule {}
