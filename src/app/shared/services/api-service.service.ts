import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {

	constructor(private http: HttpClient) { }

	getAllSubCat(): Observable<any> {
		return this.http.get(environment.apiUrl + '/subcategories/webfind');
	}

	validateOtp(userModel: any): Observable<any> {
		return this.http.get(environment.localApiUrl + '/validateOtp.json');
	}


}
