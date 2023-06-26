<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
	import { loadMap, zoomToMarker } from "./PlacemarkMap";

    export let placemarkid: string;
    export let activeLayer: string;
    export let mapid: string;

    onMount(async () => {
        loadMap(mapid, activeLayer);
    });
    afterUpdate(async () => {
        if (placemarkid !== "")
            zoomToMarker(mapid, placemarkid);
    });
</script>

<div class="box" id={mapid} style="height:50vh" />
