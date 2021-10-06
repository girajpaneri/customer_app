import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.page.html',
	styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

	registration: any = {}
	submitted: boolean = false;
	constructor(
		private navCtrl: NavController
	) { }

	ngOnInit() {
	}

	back() {
		this.navCtrl.back();
		// this.navCtrl.pop();
	}

	submit() {
		this.submitted = true;
		console.log('this.registration')
		console.log(this.registration)
		// this.navCtrl.navigateRoot('');
	}

}
