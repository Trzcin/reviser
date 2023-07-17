import { writable } from 'svelte/store';

export interface NavItem {
	name: string;
	url: string;
}

export const nav = writable<NavItem[]>([]);
