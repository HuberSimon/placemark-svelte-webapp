<script lang="ts">
    import DetailsList from '$lib/DetailsList.svelte';
    import CategoryChart from '$lib/CategoryChart.svelte';
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
	import PlacemarkMap from '$lib/PlacemarkMap.svelte';
	import PlacemarksForm from '$lib/PlacemarksForm.svelte';
    import PlacemarksList from '$lib/PlacemarksList.svelte';
	import type { PageData } from "./$types";
    export let data: PageData;

</script>

<Header>
    <MainNavigator />
</Header>
  
<div class="columns">
    <div class="column has-text-centered">
        <DetailsList placemarkid={data.placemarkid} />
        <PlacemarkMap placemarkid={data.placemarkid}/>
    </div>

    <div class="column box mt-6 has-text-centered">
        <h1 class="title is-4">Start Listing!</h1>
        <PlacemarksForm />
        <PlacemarksList placemarks={data.placemarks} userCategories={data.userCategories}  />
        <CategoryChart placemarks={data.placemarks} userCategories={data.userCategories} />
    </div>
</div>