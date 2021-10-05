import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
		private router: Router
	) { }

	ngOnInit() { }

	onSubmit() {
		this.sub.sink = this.authService.login(this.searchModel).subscribe(res => {

			console.log('res in login component')
			console.log(res)

			if (res == true) {
				console.log('here in true')
				// this.router.navigate(['/']);
				this.router.navigate(['/validate-otp']);
			}
			else {
				this.router.navigate(['/login']);
			}
		});
	}

}
