import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import "leaflet";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator, P as PlacemarkMap, a as PlacemarksForm, b as PlacemarksList } from "../../../../chunks/PlacemarksList.js";
const DetailsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placemarkid } = $$props;
  let placemarkName = "";
  let description = "";
  let location = "";
  let locLat = "";
  let locLng = "";
  let weather = "";
  let descriptionOut = "";
  let locationOut = "";
  let weatherOut = "";
  let imageOut = "";
  let latOut = "";
  let lngOut = "";
  if ($$props.placemarkid === void 0 && $$bindings.placemarkid && placemarkid !== void 0)
    $$bindings.placemarkid(placemarkid);
  return `<form><div class="box mt-5"><div class="pb-2 columns"><div class="column is-size-3">${escape(placemarkName)}</div>
        <div class="columns is-pulled-right pr-4"><div class="column"><button class="button is-link fas fa-save"></button></div>
          <button class="button is-rounded is-pulled-right" style="background: none; border: none; padding: 0;"><i class="fas fa-trash"></i></button></div></div>
      <div class="box box-link-hover-shadow"><div class="columns"><div class="column">Description: </div>
            <div class="column">${escape(descriptionOut)}</div>
            <div class="field column"><input class="input" id="description" name="description" placeholder="Description" type="text"${add_attribute("value", description, 0)}></div></div>
        <div class="columns"><div class="column">Location: </div>
            <div class="column">${escape(locationOut)}</div>
            <div class="field column"><input class="input" id="location" name="location" placeholder="Location" type="text"${add_attribute("value", location, 0)}></div></div>
        <div class="columns"><div class="column">Weather: </div>
            <div class="column">${escape(weatherOut)}</div>
            <div class="field column"><input class="input" id="weather" name="weather" placeholder="Weather" type="text"${add_attribute("value", weather, 0)}></div></div>

        <div class="columns"><div class="card"><div class="card-image"><figure class="image is-256x256"><img${add_attribute("src", imageOut, 0)}></figure></div></div></div>
        <div class="columns"><div class="column">lat: </div>
          <div class="column">${escape(latOut)}</div>
          <div class="field column"><input class="input" id="locLat" name="locLat" placeholder="lat" type="text"${add_attribute("value", locLat, 0)}></div>
        
          <div class="column">lng: </div>
          <div class="column">${escape(lngOut)}</div>
          <div class="field column"><input class="input" id="locLng" name="locLng" placeholder="lng" type="text"${add_attribute("value", locLng, 0)}></div></div></div></div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}
  
<div class="columns"><div class="column has-text-centered">${validate_component(DetailsList, "DetailsList").$$render($$result, { placemarkid: data.placemarkid }, {}, {})}
        ${validate_component(PlacemarkMap, "PlacemarkMap").$$render($$result, {}, {}, {})}</div>

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
