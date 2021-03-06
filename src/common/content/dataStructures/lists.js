import { List } from '../lib/List.js';

//ADT Lists
export function adtListAppendRemove(printHTML) {
	let names = new List();

	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	printHTML(names.toString());

	names.remove('Chris');

	printHTML(names.toString());

	return names.toString();
}

export function adtListNextPrevious(printHTML) {
	let names = new List();

	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	names.front();
	printHTML(names.getElement()); // Joe

	printHTML(names.next()); // Joe
	printHTML(names.next()); // Simon
	printHTML(names.next()); // Chris

	printHTML(names.previous()); // Chris
	printHTML(names.previous()); // Simon

	return names.toString();
}

export function adtListIterateFoward(printHTML) {
	let names = new List();

	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	for (names.front(); names.hasNext();) {
		printHTML(names.next());
	}

	return names.toString();
}

export function adtListIterateBackward(printHTML) {
	let names = new List();

	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	for (names.end(); names.hasPrevious();) {
		printHTML(names.previous());
	}

	return names.toString();
}

