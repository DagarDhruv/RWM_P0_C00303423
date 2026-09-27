import { writable, derived } from 'svelte/store';

export type Item = { id: string; label: string; done: boolean };

const defaultItems: Item[] = [
  { id: '1', label: 'Step 1', done: false },
  { id: '2', label: 'Step 2', done: false },
  { id: '3', label: 'Step 3', done: false },
  { id: '4', label: 'Step 4', done: false },
  { id: '5', label: 'Step 5', done: false }
];

export const itemsStore = writable<Item[]>(defaultItems);

export const completedStore = derived(itemsStore, (items) =>
  items.filter((i) => i.done).length
);

export const percentStore = derived(itemsStore, (items) =>
  items.length ? Math.round((100 * items.filter((i) => i.done).length) / items.length) : 0
);

export function toggleItem(id: string, done: boolean) {
  itemsStore.update((items) =>
    items.map((item) => (item.id === id ? { ...item, done } : item))
  );
}