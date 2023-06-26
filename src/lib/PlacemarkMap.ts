    // import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
	import { placemarkService } from "../services/placemark-service";
	import type { Placemark } from "../services/placemark-types";

    const mapConfig = {
        location: { lat: 49.0134, lng: 12.1016 },
        zoom: 8,
        minZoom: 1
    };

    const maps: { [key: string]: LeafletMap } = {};

    export async function loadMap(mapid: string, activeLayer: string){
        const map = new LeafletMap(mapid, mapConfig, activeLayer);
        maps[mapid] = map;
        map.showZoomControl();
        const categories = await placemarkService.getUserCategories();
        categories.forEach((category) => {
            map.addLayerGroup(category.name);
        });
        map.showLayerControl();
        const placemarks = await placemarkService.getUserPlacemarks();
        placemarks.forEach((placemark) => {
            addPlacemarkMarker(mapid, placemark);
        });
    };

    async function addPlacemarkMarker(mapid: string, placemark: Placemark) {
        if(placemark.locLat !== 0 && placemark.locLat !== null && placemark.locLng !== 0 && placemark.locLng !== null && placemark.locLat !== undefined && placemark.locLng !== undefined){
            const category = await placemarkService.getCategoryById(placemark.categoryid)
            const placemarkStr = `${placemark.name} ${category.name}`;
            const map = maps[mapid];
            map.addMarker({ lat: placemark.locLat, lng: placemark.locLng }, placemarkStr, category.name);
        }
    };

    export async function updateMap(placemark: Placemark){
        
        for (const mapKey of Object.keys(maps)) {
            const map = maps[mapKey];
            
            if (
              placemark.locLat !== 0 &&
              placemark.locLat !== null &&
              placemark.locLng !== 0 &&
              placemark.locLng !== null &&
              placemark.locLat !== undefined &&
              placemark.locLng !== undefined
            ) {
              await addPlacemarkMarker(mapKey, placemark);
              map.moveTo(8, { lat: placemark.locLat, lng: placemark.locLng });
            }
          }
    };

    export async function zoomToMarker(mapid: string, placemarkid: string){
        const map = maps[mapid];
        const placemark = await placemarkService.getPlacemarkById(placemarkid);
        if(placemark.locLat !== 0 && placemark.locLat !== null && placemark.locLng !== 0 && placemark.locLng !== null && placemark.locLat !== undefined && placemark.locLng !== undefined)
            map.moveTo(8, { lat: placemark.locLat, lng: placemark.locLng });
    }

    export function reloadMap(){
        location.reload();
    }