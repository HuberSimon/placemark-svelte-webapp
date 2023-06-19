import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "./index2.js";
import { l as loggedInUser } from "./stores.js";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loggedInUser, $$unsubscribe_loggedInUser;
  $$unsubscribe_loggedInUser = subscribe(loggedInUser, (value) => $loggedInUser = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$unsubscribe_loggedInUser();
  return `<div class="has-text-centered columns m-2"><div class="column"><img src="/trees.png" width="100" alt="Tree Logo">
        ${$loggedInUser && $loggedInUser.email ? `<div class="is-size-7">${escape($loggedInUser.email)}</div>` : `<div class="is-size-7">AllAboutPlaces-Svelte 0.1</div>`}</div>
    <div class="column"><div class="title is-3">${escape(title)}</div>
        <div class="subtitle is-6">${escape(subTitle)}</div></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "All about forests",
      subTitle: "Placemark Forests"
    },
    {},
    {}
  )}</div>
    <div class="box column p-5">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
