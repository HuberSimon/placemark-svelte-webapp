import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const credentials = {
  cloud_name: process.env.cloudinary_name,
  api_key: process.env.cloudinary_key,
  api_secret: process.env.cloudinary_secret
};
cloudinary.v2.config(credentials);

export const imageStore = {
  getAllImages: async function() {
    const result = await cloudinary.v2.api.resources();
    return result.resources;
  },

  uploadImage: async function(imagefile: Buffer) {
    const response = await cloudinary.v2.uploader.upload(
      "data:image/jpeg;base64," + imagefile.toString("base64")
    );
    return response.url;
  },

  deleteImage: async function(img: string) {
    await cloudinary.v2.uploader.destroy(img, {});
  }
};
