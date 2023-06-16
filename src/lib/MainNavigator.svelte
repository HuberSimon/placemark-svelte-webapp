<script lang="ts">
  import { loggedInUser } from "../stores.ts";
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

<div class="is-4 level-right">
  <div class="pr-5 level-left">
    <img alt="sign-post" src="/sign-post.png" width="50" style="border-radius: 50%"/>
  </div>
  <div class="pr-5">
    <div class="is-size-7 has-text-weight-bold">{greet}</div>
    {#if $loggedInUser && $loggedInUser.email}
      <div>{$loggedInUser.email}</div>
    {/if}
  </div>
    <div class="">
      <a href="/logout">
        <button class="button fas fa-sign-out-alt is-6 " style="color:rgb(156, 70, 128)" title="Log out"> Log out </button>
      </a>
    </div>
  </div>
  