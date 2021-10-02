import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';
import { SubSink } from 'subsink';
import * as _ from 'underscore';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	private sub = new SubSink();
	allSubCatList: any[] = [];
	slideOpts = {
		initialSlide: 1,
		speed: 400
	};

	constructor(
		private apiService: ApiServiceService
	) { }

	ngOnInit() {
		this.getAllSubCat();
	}

	async getAllSubCat() {
		this.sub.sink = this.apiService.getAllSubCat().subscribe(res => {
			console.log('res')
			console.log(res)
			if (res.statusCode == 200) {
				this.allSubCatList = res.data;
				_.each(this.allSubCatList, function (ele, index) {
					if (ele.name.length > 15) {
						ele.name = ele.name.substr(0, 20);
						// ele.name = ele.name + '...';
					}
				});
			}
			else {
				this.allSubCatList = [];
			}
		});
	}

}
