<script lang="ts">
    import { loggedInUser } from "../stores.ts";
    export let title = '';
    export let subTitle = '';
</script>

<div class="has-text-centered columns m-2">
    <div class="column">
        <img src="/trees.png" width="100" alt="Tree Logo" />
        {#if $loggedInUser && $loggedInUser.email}
            <div class="is-size-7">{$loggedInUser.email}</div>
        {:else}
            <div class="is-size-7">AllAboutPlaces-Svelte 0.1</div>
        {/if}
    </div>
    <div class="column">
        <div class="title is-3">{title}</div>
        <div class="subtitle is-6">{subTitle}</div>
    </div>
</div>