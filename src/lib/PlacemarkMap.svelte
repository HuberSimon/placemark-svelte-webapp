<script lang="ts">
    // import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { afterUpdate, onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";
	import type { Placemark, Category } from "../services/placemark-types";

    const mapConfig = {
        location: { lat: 49.0134, lng: 12.1016 },
        zoom: 8,
        minZoom: 1
    };

    let map: LeafletMap;

    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        const placemarks = await placemarkService.getUserPlacemarks();
        placemarks.forEach((placemark) => {
            addPlacemarkMarker(map, placemark);
        });
    });

    async function addPlacemarkMarker(map: LeafletMap, placemark: Placemark) {
        
        if(placemark.locLat !== 0 && placemark.locLng !== 0 && placemark.locLat !== undefined && placemark.locLng !== undefined){
            const category = await placemarkService.getCategoryById(placemark.categoryid)
            const placemarkStr = `${placemark.name} ${category.name}`;
            map.addMarker({ lat: placemark.locLat, lng: placemark.locLng }, placemarkStr);
        }
    }
</script>

<div class="box" id="placemark-map" style="height:75vh" />
