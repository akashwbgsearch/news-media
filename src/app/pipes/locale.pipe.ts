import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'locale' }) 
export class LocalePipe implements PipeTransform {	
	transform(value: any, i18n: any): string {
		let key = '';
		if (i18n !== undefined) {						
			if (i18n.hasOwnProperty(value)) {				
				key = i18n[value];
			} else {
				key = value;
			}
		}		
		return key;	
	} 
}