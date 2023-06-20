    // import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
	import { placemarkService } from "../services/placemark-service";
	import type { Placemark, Category } from "../services/placemark-types";

    const mapConfig = {
        location: { lat: 49.0134, lng: 12.1016 },
        zoom: 8,
        minZoom: 1
    };

    let map: LeafletMap;

    export async function loadMap(){
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        const categories = await placemarkService.getUserCategories();
        categories.forEach((category) => {
            map.addLayerGroup(category.name);
        });
        map.showLayerControl();
        const placemarks = await placemarkService.getUserPlacemarks();
        placemarks.forEach((placemark) => {
            addPlacemarkMarker(map, placemark);
        });
    };

    async function addPlacemarkMarker(map: LeafletMap, placemark: Placemark) {
        if(placemark.locLat !== 0 && placemark.locLat !== null && placemark.locLng !== 0 && placemark.locLng !== null && placemark.locLat !== undefined && placemark.locLng !== undefined){
            const category = await placemarkService.getCategoryById(placemark.categoryid)
            const placemarkStr = `${placemark.name} ${category.name}`;
            map.addMarker({ lat: placemark.locLat, lng: placemark.locLng }, placemarkStr, category.name);
        }
    };

    export async function updateMap(placemark: Placemark){
        if(placemark.locLat !== 0 && placemark.locLat !== null && placemark.locLng !== 0 && placemark.locLng !== null && placemark.locLat !== undefined && placemark.locLng !== undefined){
            await addPlacemarkMarker(map, placemark);
            map.moveTo(8, { lat: placemark.locLat, lng: placemark.locLng });
        }
    };

    export async function zoomToMarker(placemarkid: string){
        const placemark = await placemarkService.getPlacemarkById(placemarkid);
        if(placemark.locLat !== 0 && placemark.locLat !== null && placemark.locLng !== 0 && placemark.locLng !== null && placemark.locLat !== undefined && placemark.locLng !== undefined)
            map.moveTo(8, { lat: placemark.locLat, lng: placemark.locLng });
    }

    export function reloadMap(){
        location.reload();
    }