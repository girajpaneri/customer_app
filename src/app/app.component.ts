import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { SplashScreenOriginal } from '@ionic-native/splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(
		private router: Router,
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private authService: AuthenticationService
	) {
		//this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();

			this.authService.authState.subscribe(state => {
				if (state) {
					// this.router.navigate(['dashboard']);
					this.router.navigate(['']);
				} else {
					this.router.navigate(['login']);
				}
			});
		});
	}
}
