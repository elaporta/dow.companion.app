import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

	constructor(
		private menu: MenuController
	){}

	public closeSidebar(){
		this.menu.close('sidebar');
	}
}
