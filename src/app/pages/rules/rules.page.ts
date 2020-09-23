import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ImageViewerComponent } from '../../components/image-viewer/image-viewer.component';

import { LoadingService } from '../../services/loading.service';

@Component({
	selector: 'app-rules',
	templateUrl: './rules.page.html',
	styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

	@ViewChild('slides') slides: any;

	slidesOptions = {
		zoom: false,
		slidesPerView: 1.3,
		centeredSlides: true,
		spaceBetween: 20
	};

	list: number[] = [];
	listLength: number;
	activeElement: number = 1;

	constructor(
		private modalController: ModalController,
		private loadingService: LoadingService
	){
		this.loadingService.on();
	}

	ngOnInit(){
		// Generate list
		let elements = [];

		for(var i = 1; i <= 20; i++){
			elements.push(i);
		}

		// Set list
		this.list = elements;

		// Set list length
		this.listLength = this.list.length;
	}

	// Detects last item and stop loading effect
	detectLastImage(i: number){
		if(i === this.listLength){
			this.loadingService.off();
		}
	}

	// Preview image in modal
	previewImage(i: number){
		this.modalController.create({
			component: ImageViewerComponent,
			componentProps: {
				img: 'assets/rulebook/' + i + '.jpg'
			}
		}).then(modal => modal.present());
	}

	previuos(){
		if(this.activeElement > 1){
			this.activeElement--;
			this.slides.slidePrev();
		}
	}

	next(){
		if(this.activeElement < this.listLength){
			this.activeElement++;
			this.slides.slideNext();
		}
	}

	async setActiveElement(){
		let i = await this.slides.getActiveIndex();
		this.activeElement = i + 1;
	}
}
