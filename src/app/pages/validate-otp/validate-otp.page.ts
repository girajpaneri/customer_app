import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-validate-otp',
	templateUrl: './validate-otp.page.html',
	styleUrls: ['./validate-otp.page.scss'],
})
export class ValidateOtpPage implements OnInit {
	private sub = new SubSink();

	searchModel: any = {};
	submitted: boolean = false;
	constructor(
		private apiService: ApiServiceService,
		private router: Router,
		private navCtrl: NavController,
	) { }

	ngOnInit() {
	}

	onSubmit() {
		this.submitted = true;
		this.sub.sink = this.apiService.validateOtp(this.searchModel).subscribe(res => {
			if (res.statusCode == 200) {
				// this.router.navigate(['registration']);
				this.navCtrl.navigateRoot(['registration']);
			}
			else {

			}
		});
	}

}
