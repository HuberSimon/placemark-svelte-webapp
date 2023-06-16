<script>
  import Header from '$lib/Header.svelte';
  import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
	import { onMount } from 'svelte';

  let greet = 'Hello';
  function greeting () {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 6) {
      greet = "Good night!";
    } else if (hour < 12) {
      greet = "Good morning!";
    } else if (hour < 18) {
      greet = "Good afternoon!";
    } else {
      greet = "Good evening!";
    }
  };
  
  onMount(greeting);

</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns py-6 is-vcentered content">
    <div class="column has-text-centered">
      <img width="300"  src="sign-post.png" style="border-radius: 50%" alt="sign"/>
    </div>
    <div class="column">
      <h1 class=""> {greet} </h1>
      <p>List and mark your favourite Forests.</p>
      <p>Please Sign up or Log in...</p>
    </div>
  </div>
