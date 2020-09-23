import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ImageViewerComponent } from '../../components/image-viewer/image-viewer.component';

import { LoadingService } from '../../services/loading.service';
import { AlertService } from '../../services/alert.service';

@Component({
	selector: 'app-crossroads',
	templateUrl: './crossroads.page.html',
	styleUrls: ['./crossroads.page.scss'],
})
export class CrossroadsPage implements OnInit {

	@ViewChild('slides') slides: any;

	slidesOptions = {
		zoom: false,
		slidesPerView: 1.3,
		centeredSlides: true,
		spaceBetween: 20
	};

	private list: number[] = [];

	randomList: number[];
	listLength: number;
	activeElement: number = 1;

	constructor(
		private modalController: ModalController,
		private loadingService: LoadingService,
		private alertService: AlertService
	){
		this.loadingService.on();
	}

	ngOnInit(){
		// Generate list
		for(var i = 1; i <= 81; i++){
			this.list.push(i);
		}

		// Set list length
		this.listLength = this.list.length;

		// Shuffle list
		this.randomList = this.shuffle(this.list);
	}

	// Shuffle elements of array
	private shuffle(array: any[]) {
		let currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while(0 !== currentIndex){

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
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
				img: 'assets/cards/' + i + '.jpg'
			}
		}).then(modal => modal.present());
	}

	// Refresh and shuffle list
	async refresh(){
		const confirm = await this.alertService.openConfirmation('Refrescar encrucijadas?', 'Seguro? Perderas el progreso actual.');

		if(confirm){
			this.loadingService.on();
			this.randomList = this.shuffle(this.list);
			this.activeElement = this.randomList[0];
			this.slides.slideTo(0);

			setTimeout(()=>{
				this.loadingService.off();
			}, 200);
		}
	}

	previuos(){
		if(this.activeElement > 1){
			this.slides.slidePrev();
		}
	}

	next(){
		if(this.activeElement < this.listLength){
			this.slides.slideNext();
		}
	}

	async setActiveElement(){
		let i = await this.slides.getActiveIndex();
		this.activeElement = i + 1;
	}
}
