<script lang="ts">
  import ChecklistItem from '$lib/ChecklistItem.svelte';

  type Item = { id: string; label: string; done: boolean };

  export let items: Item[] = [
    { id: '1', label: 'Step 1', done: false },
    { id: '2', label: 'Step 2', done: false },
    { id: '3', label: 'Step 3', done: false },
    { id: '4', label: 'Step 4', done: false },
    { id: '5', label: 'Step 5', done: false }
  ];

  // live internal state — changes immediately as boxes are ticked
  let liveItems = items;

  // visible state — only changes on submit
  let visibleCompleted = 0;
  let visiblePercent = 0;

  function handleToggle({ id, done }: { id: string; done: boolean }) {
    liveItems = liveItems.map((item) =>
      item.id === id ? { ...item, done } : item
    );
  }

  function handleSubmit() {
    visibleCompleted = liveItems.filter((i) => i.done).length;
    visiblePercent = liveItems.length
      ? Math.round((100 * visibleCompleted) / liveItems.length)
      : 0;
  }
</script>

<div>
  <span data-testid="progress-label">
    {visibleCompleted}/{liveItems.length} ({visiblePercent}%)
  </span>

  {#each liveItems as item (item.id)}
    <ChecklistItem
      id={item.id}
      label={item.label}
      done={item.done}
      onToggle={handleToggle}
    />
  {/each}

  <button on:click={handleSubmit}>Submit version</button>
</div>