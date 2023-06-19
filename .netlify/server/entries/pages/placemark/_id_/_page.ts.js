import { p as placemarkService } from "../../../../chunks/placemark-service.js";
const ssr = false;
const load = async ({ params }) => {
  placemarkService.checkPageRefresh();
  return {
    placemarks: await placemarkService.getUserPlacemarks(),
    userCategories: await placemarkService.getUserCategories(),
    placemarkid: params.id
  };
};
export {
  load,
  ssr
};
