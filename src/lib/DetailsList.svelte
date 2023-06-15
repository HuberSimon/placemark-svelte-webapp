<script lang="ts">
    import { placemarkService } from '../services/placemark-service';
	import { goto } from "$app/navigation";
	import { afterUpdate, onMount } from 'svelte';
    export let placemarkid: string;

    let errorMessage = '';
    let userId = '';
    let placemarkName = '';
    let categoryId = '';
    let description = '';
    let location = '';
    let weather = '';
    let image = '';
    let id = '';

    let descriptionOut = '';
    let locationOut = '';
    let weatherOut = '';
    let imageOut = '';

    async function deletePlacemarkDetailsById(id: string) {
        console.log("delete Detils")
    }

    async function loadPlacemarkData() {
        const placemark = await placemarkService.getPlacemarkById(placemarkid);
        userId = placemark.userid;
        placemarkName = placemark.name;
        categoryId = placemark.categoryid;
        if (placemark.description) descriptionOut = placemark.description;
        if (placemark.location) locationOut = placemark.location;
        if (placemark.weather) weatherOut = placemark.weather;
        if (placemark.image) imageOut = placemark.image;
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
            weather: weather,
            image: image,
			};

        const updatedPlacemark = await placemarkService.updatePlacemarkDetails(updatePlacemark);
        if (updatedPlacemark) {
            if (updatedPlacemark.description) descriptionOut = updatedPlacemark.description;
            if (updatedPlacemark.location) locationOut = updatedPlacemark.location;
            if (updatedPlacemark.weather) weatherOut = updatedPlacemark.weather;
            if (updatedPlacemark.image) imageOut = updatedPlacemark.image;
            description = '';
            location = '';
            weather = '';
            goto("/placemark/" + placemarkid);
        } else {
            errorMessage = "Invalid Credentials";
        }
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
          <button on:click={() => deletePlacemarkDetailsById(id)} class="button is-rounded is-pulled-right" style="background: none; border: none; padding: 0;">
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
        </div>

      </div> 
    </div>
</form>
