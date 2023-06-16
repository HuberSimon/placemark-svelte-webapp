<script>
    import Header from '$lib/Header.svelte';
    import LoginForm from '$lib/LoginForm.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns">
    <div class="column">
        <div class="box">
            <h1 class="title">Login</h1>
            <LoginForm />
        </div>
    </div>
    <div class="column has-text-centered">
        <img alt="forest" src="/forest-logo.png" width="800" />
    </div>
</div>
