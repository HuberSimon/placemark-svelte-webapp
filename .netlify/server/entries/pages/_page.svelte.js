import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index2.js";
import { H as Header } from "../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let greet = "Hello";
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns py-6 is-vcentered content"><div class="column has-text-centered"><img width="300" src="sign-post.png" style="border-radius: 50%" alt="sign"></div>
    <div class="column"><h1 class="">${escape(greet)}</h1>
      <p>List and mark your favourite Forests.</p>
      <p>Please Sign up or Log in...</p></div></div>`;
});
export {
  Page as default
};
