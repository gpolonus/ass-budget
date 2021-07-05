
<script>
  import { onMount } from "svelte";
  import { Line } from 'chartist';

  export let dailyData;

  onMount(() => {
    const data = {
      // A labels array that can contain any sort of values
      labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
      // Our series array that contains series objects or in this case series data arrays
      series: [
        dailyData.map(({ value }) => value)
      ]
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object. As a third parameter we pass in our custom options.
    new Line('.ct-chart', data)
  })
</script>

<div class="ct-chart ct-perfect-fourth"></div>
