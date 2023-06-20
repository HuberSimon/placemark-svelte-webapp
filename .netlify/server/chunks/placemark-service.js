import axios from "axios";
import { l as loggedInUser } from "./stores.js";
const placemarkService = {
  baseUrl: "https://placemark-10-kdbg.onrender.com",
  // "http://localhost:3000",
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        loggedInUser.set({
          email,
          token: response.data.token,
          _id: response.data.id
        });
        localStorage.user = JSON.stringify({ email, token: response.data.token, _id: response.data.id });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async logout() {
    loggedInUser.set({
      email: "",
      token: "",
      _id: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
  },
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName,
        lastName,
        email,
        password
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  },
  checkPageRefresh() {
    if (!axios.defaults.headers.common["Authorization"]) {
      const userCredentials = localStorage.user;
      if (userCredentials) {
        const savedUser = JSON.parse(userCredentials);
        loggedInUser.set({
          email: savedUser.email,
          token: savedUser.token,
          _id: savedUser._id
        });
        axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
      }
    }
  },
  async getUserPlacemarks() {
    try {
      let currUserId;
      currUserId = "";
      loggedInUser.subscribe((user) => {
        currUserId = user._id;
      });
      const response = await axios.get(`${this.baseUrl}/api/placemarks`);
      const placemarks = [];
      for (const placemark of response.data) {
        if (placemark.userid === currUserId) {
          placemarks.push(placemark);
        }
      }
      return placemarks;
    } catch (error) {
      return [];
    }
  },
  async createPlacemark(placemarkname, categoryname) {
    try {
      let currUserId;
      currUserId = "";
      loggedInUser.subscribe((user) => {
        currUserId = user._id;
      });
      const newPlacemark = {
        userid: currUserId,
        name: placemarkname,
        categoryname
      };
      const response = await axios.post(`${this.baseUrl}/api/placemarks`, newPlacemark);
      if (response.status == 201)
        return response.data;
      else
        return false;
    } catch (error) {
      return false;
    }
  },
  async getPlacemarkById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/placemarks/${id}`);
      return response.data;
    } catch (error) {
      return {
        userid: "",
        name: "",
        categoryid: "",
        description: "",
        location: "",
        locLat: 0,
        locLng: 0,
        weather: "",
        image: "",
        _id: ""
      };
    }
  },
  async deletePlacemark(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/api/placemarks/${id}`);
      return response.status == 204;
    } catch (error) {
      return false;
    }
  },
  async getUserCategories() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/categories`);
      const placemarks = placemarkService.getUserPlacemarks();
      const categories = [];
      for (const category of response.data) {
        for (const placemark of await placemarks) {
          if (placemark.categoryid === category._id) {
            categories.push(category);
            break;
          }
        }
      }
      return categories;
    } catch (error) {
      return [];
    }
  },
  async updatePlacemarkDetails(placemark) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/placemarks/${placemark._id}/update`, placemark);
      if (response.status == 200)
        return response.data;
      else
        return {};
    } catch (error) {
      return {};
    }
  },
  async getCategoryById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/categories/${id}`);
      return response.data;
    } catch (error) {
      return {
        name: "",
        count: 0,
        _id: ""
      };
    }
  }
};
export {
  placemarkService as p
};
