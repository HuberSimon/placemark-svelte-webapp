import { p as placemarkService } from "../../../chunks/placemark-service.js";
const ssr = false;
const load = async () => {
  placemarkService.checkPageRefresh();
  return {
    placemarks: await placemarkService.getUserPlacemarks(),
    userCategories: await placemarkService.getUserCategories()
  };
};
export {
  load,
  ssr
};
