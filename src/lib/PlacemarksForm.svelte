<script>
    import { goto } from '$app/navigation';
    import { placemarkService } from '../services/placemark-service';

    let name = '';
    let categoryname = '';
    let errorMessage = '';

    async function addplacemark() {
        let addedplacemark = await placemarkService.createPlacemark(name, categoryname);
        if (addedplacemark) {
            name = "";
            categoryname = "";
            goto("/placemark/" + addedplacemark._id);
        } else {
            name = "";
            categoryname = "";
            errorMessage = "Invalid Credentials";
        }
    }
</script>

<form on:submit|preventDefault={addplacemark}>
    <div class="columns">
      <div class="field column">
        <label class="label" for="name">Placemark Name</label>
        <input bind:value={name} class="input" id="name" name="name" placeholder="Enter placemark name" type="text" />
      </div>
      <div class="field column">
        <label class="label" for="categoryname">Category</label>
        <input bind:value={categoryname} class="input" id="categoryname" name="categoryname" placeholder="Enter category" type="text" />
      </div>
    </div>
    <button class="button is-link">Add Placemark</button>
    {#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
    {/if}
</form>
  