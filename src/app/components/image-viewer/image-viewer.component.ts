import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
	selector: 'app-image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
	img: string;

	@ViewChild('slides', { read: ElementRef }) private slides: ElementRef;

	slidesOptions = {
		zoom: {
			maxRatio: 2.5
		},
		centeredSlides: true
	};

	constructor(
		private navParams: NavParams,
		private modalController: ModalController
	){}

	ngOnInit(){
		this.img = this.navParams.get('img');
	}

	zoom(zoomIn: boolean){
		let zoom = this.slides.nativeElement.swiper.zoom;

		if(zoomIn){
			zoom.in();
		}
		else{
			zoom.out()
		}
	}

	close(){
		this.modalController.dismiss();
	}
}
