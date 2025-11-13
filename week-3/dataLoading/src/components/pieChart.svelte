 <script>
  import { onMount } from "svelte";
  import { fetchData } from "../lib/dataFetch.js";

    onMount(async () => {
      const data = await fetchData()
      createPieChart(data);
  });

  const createPieChart = (data) => {
    console.log(data);
    const width = innerWidth;
    const height = innerHeight - 100;
    const centerX = width / 2;
    const centerY = height / 2;
  }

  // [...]
 </script>

<h2>Pie Chart</h2>
