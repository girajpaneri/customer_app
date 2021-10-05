import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	authState = new BehaviorSubject(false);

	constructor(
		private router: Router,
		private platform: Platform,
		public toastController: ToastController,
		private http: HttpClient
	) {
		this.platform.ready().then(() => {
			this.ifLoggedIn();
		});
	}

	ifLoggedIn() {

		let currentUser = localStorage.getItem('currentUser');
		if (currentUser) {
			console.log('currentUser')
			console.log(currentUser)
			this.authState.next(true);
		}
	}


	login(userModel: any): Observable<any> {
		// return this.http.post(environment.localApiUrl + '/login.json', { userModel }).pipe(map(userData => {
		return this.http.get(environment.localApiUrl + '/login.json').pipe(map(userData => {

			console.log('userData')
			console.log(userData)

			if (userData) {
				console.log('in login after login')
				localStorage.setItem('currentUser', JSON.stringify(userData));
				// this.router.navigate(['']);
				// this.router.navigate(['dashboard']);
				this.authState.next(true);
				return true;
			}
			else {
				return false;
			}
		}))
	}

	logout() {
		console.log('in logout')
		localStorage.clear();
		// this.router.navigate(['login']);
		this.authState.next(false);
	}

	isAuthenticated() {
		return this.authState.value;
	}
}
