import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor(
		private alertController: AlertController,
	){}

	public async openConfirmation(header: string, message: string): Promise<boolean> {
		let resolveFunction: (confirm: boolean) => void;

		const promise = new Promise<boolean>(resolve => {
			resolveFunction = resolve;
		});

		const alert = await this.alertController.create({
			header: header,
			message: message,
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => resolveFunction(false)
				},
				{
					text: 'Si',
					handler: () => resolveFunction(true)
				}
			]
		});

		await alert.present();

		return promise;
	}
}
