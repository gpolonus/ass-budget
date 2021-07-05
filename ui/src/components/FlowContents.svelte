
<script>
  import { onMount } from 'svelte';
  import { inputs, outputs } from '../stores';
  import { FLOW_TYPES } from '../constants';
  import { fetchInputs, postInput, fetchOutputs, postOutput } from '../stores/actions';
  import FlowForm from '../components/FlowForm.svelte';
  import Flow from '../components/Flow.svelte';

  export let type;

  let createOpen = false;

  const onSubmit = async ({ name, amount, recurringType, recurringData }) => {
    switch(type) {
      case FLOW_TYPES.INPUT:
        await postInput({ name, amount, recurringType, recurringData })
        break;
        case FLOW_TYPES.OUTPUT:
        await postOutput({ name, amount, recurringType, recurringData })
        break;
    }
  }

  let data
  $: {
    switch(type) {
      case FLOW_TYPES.INPUT:
        data = $inputs
        break
      case FLOW_TYPES.OUTPUT:
        data = $outputs
        break
    }
  }

  onMount(() => {
    switch(type) {
      case FLOW_TYPES.INPUT:
        fetchInputs()
        break
      case FLOW_TYPES.OUTPUT:
        fetchOutputs()
        break
    }
  })
</script>

<style>
</style>

<h1>
  {FLOW_TYPES[type]} Data
</h1>

<div>
  <button on:click={() => createOpen = !createOpen}>{#if createOpen}Close{:else}Open{/if} Create</button>
</div>

{#if createOpen}
  <FlowForm {onSubmit} />
{/if}

{#if !data}
  <div>
    Loading...
  </div>
{/if}

{#if data && data.length}
  <table>
    <tr>
      <th>Name</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Data</th>
    </tr>
    {#each data as input}
    <tr>
      <td>{input.name}</td>
      <td>${input.amount}</td>
      <td>{input.recurringType}</td>
      <td>{input.recurringData}</td>
    </tr>
    {/each}
  </table>
{:else}
  <div>
    No data
  </div>
{/if}
