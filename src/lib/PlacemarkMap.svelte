<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";

    const mapConfig = {
        location: { lat: 49.0134, lng: 12.1016 },
        zoom: 8,
        minZoom: 1
    };
    let map;

    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
    });
</script>

<div class="box" id="placemark-map" style="height:75vh" />
