<script>
    import TitleBar from './TitleBar.svelte';
</script>

<div class="box columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'All about forests'} subTitle={'Placemark Forests'} />
    </div>
    <div class="box column p-5">
        <slot />
    </div>
</div>
