import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, d as each } from "./index2.js";
import { l as loggedInUser } from "./stores.js";
import "leaflet";
const MainNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loggedInUser, $$unsubscribe_loggedInUser;
  $$unsubscribe_loggedInUser = subscribe(loggedInUser, (value) => $loggedInUser = value);
  let greet = "Hello";
  $$unsubscribe_loggedInUser();
  return `<div class="is-4 level-right"><div class="pr-5 level-left"><img alt="sign-post" src="/sign-post.png" width="50" style="border-radius: 50%"></div>
  <div class="pr-5"><div class="is-size-7 has-text-weight-bold">${escape(greet)}</div>
    ${$loggedInUser && $loggedInUser.email ? `<div>${escape($loggedInUser.email)}</div>` : ``}</div>
    <div class=""><a href="/logout"><button class="button fas fa-sign-out-alt is-6 " style="color:rgb(156, 70, 128)" title="Log out">Log out </button></a></div></div>`;
});
const PlacemarkMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box" id="placemark-map" style="height:75vh"></div>`;
});
const PlacemarksForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let categoryname = "";
  return `<form><div class="columns"><div class="field column"><label class="label" for="name">Placemark Name</label>
        <input class="input" id="name" name="name" placeholder="Enter placemark name" type="text"${add_attribute("value", name, 0)}></div>
      <div class="field column"><label class="label" for="categoryname">Category</label>
        <input class="input" id="categoryname" name="categoryname" placeholder="Enter category" type="text"${add_attribute("value", categoryname, 0)}></div></div>
    <button class="button is-link">Add Placemark</button>
    ${``}</form>`;
});
const PlacemarksList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemarks } = $$props;
  let { userCategories } = $$props;
  if ($$props.placemarks === void 0 && $$bindings.placemarks && placemarks !== void 0)
    $$bindings.placemarks(placemarks);
  if ($$props.userCategories === void 0 && $$bindings.userCategories && userCategories !== void 0)
    $$bindings.userCategories(userCategories);
  return `<div class="box mt-6"><div class="pb-2"><h1>List all your favorite forests:</h1></div>

  ${each(userCategories, (userCategory) => {
    return `<div class="box box-link-hover-shadow "><h1 class="pb-4 is-size-2 has-text-weight-bold has-text-left">${escape(userCategory.name)}</h1>
    ${each(placemarks, (mark) => {
      return `${userCategory._id === mark.categoryid ? `<div class="columns"><a href="${"/placemark/" + escape(mark._id, true)}" class="is-size-4 column">${escape(mark.name)}</a>
          <div class="column is-fixed is-one-quarter"><button class="button is-rounded is-pulled-right" style="background: none; border: none; padding: 0;"><i class="fas fa-trash"></i>
            </button></div>
        </div>` : ``}`;
    })}
    </div>`;
  })}</div>`;
});
export {
  MainNavigator as M,
  PlacemarkMap as P,
  PlacemarksForm as a,
  PlacemarksList as b
};
