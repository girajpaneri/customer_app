import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-login-signup',
	templateUrl: './login-signup.page.html',
	styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {
	private sub = new SubSink();
	searchModel: any = {};
	constructor(
		private authService: AuthenticationService,
		private navCtrl: NavController
	) { }

	ngOnInit() { }

	onSubmit() {
		this.sub.sink = this.authService.login(this.searchModel).subscribe(res => {
			if (res == true) {
				console.log('here in true')
				this.navCtrl.navigateRoot(['validate-otp']);
			}
			else {
				this.navCtrl.navigateRoot(['login']);
			}
		});
	}

}
