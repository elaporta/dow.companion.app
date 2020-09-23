import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {

	constructor(
		private router: Router
	){}

	// Return true if the obj is empty
    public isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }

    // Automatic return object in front using {{this.util.diagnostic(obj)}}
    public diagnostic(obj) {
        return JSON.stringify(obj);
    }

    // Copy object without references
    public copyObject(object) {
        return JSON.parse(JSON.stringify(object));
    }

    // Go to Url
    public goToPage(url: string) {
        this.router.navigate([url]);
    }
}
