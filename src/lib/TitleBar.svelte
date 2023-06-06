<script>
    import WelcomeNavigator from './WelcomeNavigator.svelte';
    export let title = '';
    export let subTitle = '';
</script>

<div class="box has-text-centered columns m-2">
    <div class="column">
        <img src="/trees.png" width="100" alt="Tree Logo" />
        <div class="is-size-7">AllAboutPlaces-Svelte 0.1</div>
    </div>
    <div class="column">
        <div class="title is-3">{title}</div>
        <div class="subtitle is-6">{subTitle}</div>
    </div>
    <div class="column">
        <WelcomeNavigator />
    </div>
</div>