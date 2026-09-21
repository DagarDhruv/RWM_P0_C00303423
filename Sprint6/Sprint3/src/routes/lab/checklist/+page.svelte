<script>
  import ChecklistItem from '$lib/ChecklistItem.svelte';
  let count = 0;
</script>

<h1 data-testid="title">Progress Checklist</h1>

<ChecklistItem id="1" label="Step 1" onToggle={({ id, done }) => console.log(id, done)} />