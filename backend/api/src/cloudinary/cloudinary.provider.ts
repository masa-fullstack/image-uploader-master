import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    return v2.config({
      cloud_name: process.env.IMAGE_SERVER_CLOUD_NAME,
      api_key: process.env.IMAGE_SERVER_API_KEY,
      api_secret: process.env.IMAGE_SERVER_API_SECRET,
    });
  },
};
