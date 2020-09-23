import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {

	// Loading state variables
    private loadingStateSource = new BehaviorSubject<boolean>(false);
    public loadingState = this.loadingStateSource.asObservable();

	constructor(){}

	public on(){
        this.loadingStateSource.next(true);
    }

	public off(){
        this.loadingStateSource.next(false);
    }

    public set(state: boolean){
        this.loadingStateSource.next(state);
    }
}
