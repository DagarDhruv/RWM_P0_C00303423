<script lang="ts">
  import ChecklistItem from '$lib/ChecklistItem.svelte';
  import { itemsStore, completedStore, percentStore, toggleItem } from '$lib/stores/checklist';

  let visibleCompleted = 0;
  let visiblePercent = 0;
  let animatedPercent = 0;

  function handleToggle({ id, done }: { id: string; done: boolean }) {
    toggleItem(id, done);
  }

  function handleSubmit() {
    visibleCompleted = $completedStore;
    visiblePercent = $percentStore;
  }

  $: if (typeof window !== 'undefined') {
    animateTo(visiblePercent);
  }

  let animationFrame: number;
  function animateTo(target: number) {
    cancelAnimationFrame(animationFrame);
    const start = animatedPercent;
    const startTime = performance.now();
    const duration = 1000;

    function step(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      animatedPercent = Math.round(start + (target - start) * t);
      if (t < 1) animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
  }

  
  function colourForPercent(p: number): string {
    const hue = (p / 100) * 120; 
    return `hsl(${hue}, 75%, 45%)`;
  }

  $: animatedColour = colourForPercent(animatedPercent);
</script>

<div>
  <span data-testid="progress-label">
    {visibleCompleted}/{$itemsStore.length} ({visiblePercent}%)
  </span>

  <div class="progress-track">
    <div
      class="progress-target"
      data-testid="progress-target"
      data-value={visiblePercent}
      style="width: {visiblePercent}%"
    />
    <div
      class="progress-animated"
      data-testid="progress-animated"
      data-value={animatedPercent}
      style="width: {animatedPercent}%; background: {animatedColour};"
    />
  </div>

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

<style>
  .progress-track {
    position: relative;
    height: 20px; 
    background: #eee;
    border-radius: 10px;
    overflow: hidden;
  }
  .progress-target {
    position: absolute;
    inset: 0;
    background: #cde;
  }
  .progress-animated {
    position: absolute;
    inset: 0;
    transition: background 0.3s ease;
  }
</style>