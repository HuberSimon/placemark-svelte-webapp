<script lang="ts">
  import { placemarkService } from '../services/placemark-service';
  import { goto } from "$app/navigation";
  import { afterUpdate, onMount } from 'svelte';
  import { loadMap, reloadMap, updateMap } from './PlacemarkMap';
  export let placemarkid: string;

  let errorMessage = '';
  let userId = '';
  let placemarkName = '';
  let categoryId = '';
  let description = '';
  let location = '';
  let locLat = '';
  let locLng = '';
  let weather = '';
  let image = '';
  let id = '';

  let descriptionOut = '';
  let locationOut = '';
  let weatherOut = '';
  let imageOut = '';
  let latOut = '';
  let lngOut = '';

  async function deletePlacemarkDetails() {
    await placemarkService.deletePlacemarksDetailsById(placemarkid);
    reloadMap();
  }

  async function loadPlacemarkData() {
      const placemark = await placemarkService.getPlacemarkById(placemarkid);
      userId = placemark.userid;
      placemarkName = placemark.name;
      categoryId = placemark.categoryid;
      descriptionOut = placemark.description ? placemark.description : "";
      locationOut = placemark.location ? placemark.location : "";
      latOut = placemark.locLat ? placemark.locLat.toString() : '';
      lngOut = placemark.locLng ? placemark.locLng.toString() : '';
      weatherOut = placemark.weather ? placemark.weather : "";
      imageOut = placemark.image;
      id = placemark._id;
  };

  async function save() {
    const updatePlacemark = {
      _id: id,
      userid: userId,
      name: placemarkName,
      categoryid: categoryId,
      description: description,
      location: location,
      locLat: locLat ? parseFloat(locLat) : 0,
      locLng: locLng ? parseFloat(locLng) : 0,
      weather: weather,
      image: image,
    };
    const updatedPlacemark = await placemarkService.updatePlacemarkDetails(updatePlacemark);
    if (updatedPlacemark) {
      descriptionOut = updatedPlacemark.description ;
      locationOut = updatedPlacemark.location;
      latOut = updatedPlacemark.locLat.toString();
      lngOut = updatedPlacemark.locLng.toString();
      weatherOut = updatedPlacemark.weather;
      imageOut = updatedPlacemark.image;
      description = '';
      location = '';
      locLat = '';
      locLng = '';
      weather = '';
      updateMap(updatedPlacemark);
    } else {
        console.log("error update Placemark");
    }
  }

  const fileInput = document.querySelector<HTMLInputElement>(".file-input");
  if (fileInput) {
    fileInput.onchange = () => {
      if (fileInput.files && fileInput.files.length > 0) {
        const fileName = document.querySelector<HTMLElement>(".file-name");
        if (fileName) {
          fileName.textContent = fileInput.files[0].name;
        }
      }
    };
  }



  onMount(async () => {
    loadPlacemarkData();
    });

  afterUpdate(() => {
    loadPlacemarkData();
  });

</script>




<form on:submit|preventDefault={save}>
    <div class="box mt-5">
      <div class="pb-2 columns">
        <div class="column is-size-3">{ placemarkName }</div>
        <div class="columns is-pulled-right pr-4">
          <div class="column">
            <button class="button is-link fas fa-save"></button>
          </div>
          <button on:click={() => deletePlacemarkDetails()} class="button is-rounded is-pulled-right" style="background: none; border: none; padding: 0;">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="box box-link-hover-shadow">
        <div class="columns">
            <div class="column">Description: </div>
            <div class="column">{descriptionOut}</div>
            <div class="field column">
                <input bind:value={description} class="input" id="description" name="description" placeholder="Description" type="text" />
            </div>
        </div>
        <div class="columns">
            <div class="column">Location: </div>
            <div class="column">{locationOut}</div>
            <div class="field column">
                <input bind:value={location} class="input" id="location" name="location" placeholder="Location" type="text" />
            </div>
        </div>
        <div class="columns">
            <div class="column">Weather: </div>
            <div class="column">{weatherOut}</div>
            <div class="field column">
                <input bind:value={weather} class="input" id="weather" name="weather" placeholder="Weather" type="text" />
            </div>
        </div>

        <div class="columns">
            <div class="card">
              <div class="card-image">
                <figure class="image is-256x256">
                  <img src={imageOut}>
                </figure>
              </div>
            </div>
            
            
            <div class="card-content">
              <div id="file-select" class="file has-name is-fullwidth">
                <label class="file-label"> <input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                    </span>
                  <span class="file-name"></span>
                </label>
              </div>
            </div>

        </div>
        <div class="columns">
          <div class="column">lat: </div>
          <div class="column">{latOut}</div>
          <div class="field column">
              <input bind:value={locLat} class="input" id="locLat" name="locLat" placeholder="lat" type="text" />
          </div>
        
          <div class="column">lng: </div>
          <div class="column">{lngOut}</div>
          <div class="field column">
              <input bind:value={locLng} class="input" id="locLng" name="locLng" placeholder="lng" type="text" />
          </div>
        
        </div>
      </div> 
    </div>
</form>
