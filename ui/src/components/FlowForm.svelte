
<script>
  import { RECURRING_TYPES } from '../constants'

  export let onSubmit = () => {};

  let name;
  let amount;
  let recurringType;
  let recurringData;

  const submitHandler = async () => {
    await onSubmit({ name, amount, recurringType, recurringData })
    name = ''
    amount = undefined
    recurringType = RECURRING_TYPES.MONTHLY
    recurringData = undefined
  }
</script>

<style>
</style>

<div class='flow-form'>
  <div>
    <input name='name' type='text' bind:value={name} />
  </div>
  <div>
    <input name='amount' type='number' bind:value={amount} />
  </div>
  <div>
    <select name='recurringType' bind:value={recurringType}>
    {#each Object.values(RECURRING_TYPES) as type}
      <option value={type}>{type}</option>
    {/each}
    </select>
  </div>
  <div>
    <input name='recurringData' type='number' bind:value={recurringData} />
    {#if recurringType === RECURRING_TYPES.WEEKLY}
      day of the week
    {:else if recurringType === RECURRING_TYPES.MONTHLY}
      day of the month
    {/if}
  </div>
  <div>
    <button on:click={submitHandler}>Submit</button>
  </div>
</div>
