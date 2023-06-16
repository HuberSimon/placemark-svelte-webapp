import { placemarkService } from "../../../services/placemark-service";
export const ssr = false;

export const load = async ({ params }) => {
	placemarkService.checkPageRefresh();

	return {
		placemarks: await placemarkService.getUserPlacemarks(),
		userCategories: await placemarkService.getUserCategories(),
        placemarkid: params.id
    };
};