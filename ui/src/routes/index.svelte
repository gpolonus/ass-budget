<script>
  import DailyChart from '../components/DailyChart2.svelte';
  import { fetchDailyData } from '../stores/actions'

  let startAmount;
  let dailyData = []

  const handleSubmit = async () => {
    let endDate = new Date()
    endDate.setMonth(endDate.getMonth() + 3)
    endDate = endDate.getTime()
    dailyData = await fetchDailyData({ startAmount, endDate })
  }
</script>

<style>
</style>

<svelte:head>
  <title>ASS BUDGET</title>
</svelte:head>

<h1>LET'S GET CRACKIN</h1>

<div>
  <input type='startAmount' bind:value={startAmount} />
  <button on:click={handleSubmit}>Submit</button>
</div>

{#if dailyData.length}
<DailyChart {dailyData} />
<table>
  {#each dailyData as day}
  <tr>
    <td>
      {new Date(day.date).toLocaleString()}
    </td>
    <td>
      ${parseInt(day.value).toLocaleString()}
    </td>
  </tr>
  {/each}
</table>
{/if}
