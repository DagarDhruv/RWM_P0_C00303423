<script lang="ts">
  import ChecklistItem from '$lib/ChecklistItem.svelte';
  import { itemsStore, completedStore, percentStore, toggleItem } from '$lib/stores/checklist';
  let visibleCompleted = 0;
  let visiblePercent = 0;

  function handleToggle({ id, done }: { id: string; done: boolean }) {
    toggleItem(id, done);
  }

  function handleSubmit() {
    visibleCompleted = $completedStore;
    visiblePercent = $percentStore;
  }
</script>

<div>
  <span data-testid="progress-label">
    {visibleCompleted}/{$itemsStore.length} ({visiblePercent}%)
  </span>

  {#each $itemsStore as item (item.id)}
    <ChecklistItem
      id={item.id}
      label={item.label}
      done={item.done}
      onToggle={handleToggle}
    />
  {/each}

  <button on:click={handleSubmit}>Submit version</button>
</div>