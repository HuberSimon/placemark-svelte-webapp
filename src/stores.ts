import { writable } from "svelte/store";
import type { LoggedInUser, Placemark } from "./services/placemark-types";

export const loggedInUser = writable<LoggedInUser>();

export const latestPlacemark = writable<Placemark>();
