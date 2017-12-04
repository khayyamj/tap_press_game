import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-action-buttons',
	templateUrl: './button.html'
})
export class ActionButtons {
	@Output() didReset = new EventEmitter<string>();
	@Output() didIncrement = new EventEmitter<string>();

	onReset(type: string) {
		this.didReset.emit(type);
	}

	onIncrement(type: string) {
		console.log(type);
		this.didIncrement.emit(type);
	}
	
}