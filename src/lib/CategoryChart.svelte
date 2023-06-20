<script lang="ts">
    // @ts-ignore
    import Chart from "svelte-frappe-charts";
    import type { ChartData } from "../services/charts";
	import type { Category, Placemark } from "../services/placemark-types";
	import { afterUpdate, onMount } from "svelte";
    
    export let placemarks: Placemark[];
    export let userCategories: Category[];

    let data: ChartData = {
      labels: [],
      datasets: [
        {
          values: []
        }
      ]
    };

    afterUpdate(() => {
        const categories: string[] = userCategories.map(element => element.name);
        const categoryCount: { [key: string]: number } = {};

        for (const category of userCategories) {
            let count = 0;
            for (const placemark of placemarks) {
                if (category._id === placemark.categoryid) {
                    count++;
                }
            }
            categoryCount[category.name] = count;
        }

        const countArray: number[] = Object.values(categoryCount);

        data.labels = categories;
        data.datasets[0].values = countArray;
    });

  </script>
  
  <Chart {data} type="pie" />
