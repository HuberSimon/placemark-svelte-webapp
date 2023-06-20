<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
	import { loadMap, zoomToMarker } from "./PlacemarkMap";

    export let placemarkid: string;

    onMount(async () => {
        loadMap();
    });
    afterUpdate(async () => {
        if (placemarkid !== "")
            zoomToMarker(placemarkid);
    });
</script>

<div class="box" id="placemark-map" style="height:75vh" />
