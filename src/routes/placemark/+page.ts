import { placemarkService } from "../../services/placemark-service";
export const ssr = false;


export const load = async () => {
	placemarkService.checkPageRefresh();

	return {
		placemarks: await placemarkService.getUserPlacemarks(),
		userCategories: await placemarkService.getUserCategories()
	};
};
