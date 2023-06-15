<script lang="ts">
  import { loggedInUser } from "../stores.ts";

</script>

<div class="is-4 level-right">
  <div class="pr-5">
    <div class="is-size-7 has-text-weight-bold">Hello</div>
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
  