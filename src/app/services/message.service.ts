import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class MessageService {
	private _messageBar = inject(MatSnackBar);

	constructor() {}

	showMessage(msg: any, error: string): void {
		if (msg?.status == 0 || msg == undefined) {
			msg = 'Requisição Inválida!';
		}

		this._messageBar.open(msg, 'X', {
			duration: 5000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: error ? ['msg-' + error] : ['msg-' + error],
		});
	}
}
