 <script>
  import { onMount } from "svelte";
  import { fetchData } from "../lib/dataFetch.js";

    onMount(async () => {
      const data = await fetchData()
      createBarChart(data);
  });

  const createBarChart = (data) => {
    console.log(data);
    const width = innerWidth;
    const height = innerHeight - 100;
    const centerX = width / 2;
    const centerY = height / 2;
  }

  // [...]
 </script>

 <style>
  h2 {
    font-size: 4em;
  }
 </style>

<h2>Bar Chart</h2>
