import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator, P as PlacemarkMap, a as PlacemarksForm, b as PlacemarksList } from "../../../chunks/PlacemarksList.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}
  
<div class="columns"><div class="column has-text-centered">${validate_component(PlacemarkMap, "PlacemarkMap").$$render($$result, {}, {}, {})}</div>

    <div class="column box mt-6 has-text-centered"><h1 class="title is-4">Start Listing!</h1>
        ${validate_component(PlacemarksForm, "PlacemarksForm").$$render($$result, {}, {}, {})}
        ${validate_component(PlacemarksList, "PlacemarksList").$$render(
    $$result,
    {
      placemarks: data.placemarks,
      userCategories: data.userCategories
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
