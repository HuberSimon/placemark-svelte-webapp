<script lang="ts">
	import type { Placemark, Category } from "../services/placemark-types";
  import { placemarkService } from '../services/placemark-service';
	import { goto } from "$app/navigation";
  export let placemarks: Placemark[];
	export let userCategories: Category[];

  async function deletePlacemarkByString(id: string) {
    await placemarkService.deletePlacemark(id); 
    location.reload();
  }

</script>

<div class="box mt-6">
    <div class="pb-2">
        <h1>List all your favorite forests:</h1>
    </div>

  {#each userCategories as userCategory }
    <div class="box box-link-hover-shadow ">
        <h1 class="pb-4 is-size-2 has-text-weight-bold has-text-left">{userCategory.name}</h1>
    {#each placemarks as mark }
      {#if (userCategory._id === mark.categoryid) }
        <div class="columns">
          <a href="/placemark/{mark._id}" class="is-size-4 column">
            {mark.name}
          </a>
          <div class="column is-fixed is-one-quarter">
            <button on:click={() => deletePlacemarkByString(mark._id)} class="button is-rounded is-pulled-right" style="background: none; border: none; padding: 0;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      {/if }
    {/each }
    </div>
  {/each }
</div>

