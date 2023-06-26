<script lang="ts">
    import DetailsList from '$lib/DetailsList.svelte';
    import CategoryChart from '$lib/CategoryChart.svelte';
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
	import PlacemarkMap from '$lib/PlacemarkMap.svelte';
	import PlacemarksForm from '$lib/PlacemarksForm.svelte';
    import PlacemarksList from '$lib/PlacemarksList.svelte';
	import type { PageData, RouteParams } from "./$types";
	import { afterUpdate } from 'svelte';
	import { zoomToMarker } from '$lib/PlacemarkMap';
    export let data: PageData;

    afterUpdate(async () => {
        if (data.placemarkid !== "")
            zoomToMarker("placemark-map-Terrain", data.placemarkid);
            zoomToMarker("placemark-map-Satellite", data.placemarkid);
    });

</script>

<Header>
    <MainNavigator />
</Header>
  
<div class="columns">
    <div class="column has-text-centered">
        <DetailsList placemarkid={data.placemarkid} />
        <div>
            <PlacemarkMap placemarkid={""} mapid={"placemark-map-Terrain"} activeLayer={"Terrain"}/>
        </div>
        <div>
            <PlacemarkMap placemarkid={""} mapid={"placemark-map-Satellite"} activeLayer={"Satellite"}/>
        </div>
    </div>

    <div class="column box mt-6 has-text-centered">
        <h1 class="title is-4">Start Listing!</h1>
        <PlacemarksForm />
        <PlacemarksList placemarks={data.placemarks} userCategories={data.userCategories}  />
        <CategoryChart placemarks={data.placemarks} userCategories={data.userCategories} />
    </div>
</div>