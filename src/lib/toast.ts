import { writable } from 'svelte/store';

export interface Toast {
	id: number;
	kind: 'success' | 'error';
	message: string;
}

export const toasts = writable<Toast[]>([]);

let nextId = 0;

export function toast(kind: Toast['kind'], message: string, duration = 5000) {
	const id = nextId++;
	toasts.update((t) => [...t, { id, kind, message }]);
	setTimeout(() => toasts.update((t) => t.filter((x) => x.id !== id)), duration);
}
