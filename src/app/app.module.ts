import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginSignupPageModule } from './pages/login-signup/login-signup.module';

@NgModule({
	declarations: [
		AppComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		FormsModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		LoginSignupPageModule,
	],
	providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule { }
