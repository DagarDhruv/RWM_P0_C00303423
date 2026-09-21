<script>
 export let id;
 export let label;
 export let done = false;
 export let onToggle; // callback prop, not a dispatched event


 function handleChange() {
   onToggle?.({ id, done });
 }
</script>


<label>
 <input
   type="checkbox"
   bind:checked={done}
   on:change={handleChange}
   data-testid="checkbox-{id}"
 />
 {label}
</label>
