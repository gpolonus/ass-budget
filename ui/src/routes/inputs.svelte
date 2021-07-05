
<script>
  import { onMount } from 'svelte';
  import { inputs } from '../stores';
  import { fetchInputs, postInput } from '../stores/actions';
  import FlowForm from '../components/FlowForm.svelte';
  import Flow from '../components/Flow.svelte';

  let createOpen = false;

  const onSubmit = async ({ name, amount, recurringType, recurringData }) => {
    await postInput({ name, amount, recurringType, recurringData })

  }

  onMount(() => {
    fetchInputs()
  })
</script>

<style>
</style>

<button on:click={() => createOpen = !createOpen}>{#if createOpen}Close{:else}Open{/if} Create</button>

{#if createOpen}
  <FlowForm {onSubmit} />
{/if}

{#if !$inputs}
  Loading...
{/if}

{#if $inputs && $inputs.length}
  <table>
  {#each $inputs as input}
    <Flow {...input} />
  {/each}
  </table>
{:else}
  No data
{/if}
