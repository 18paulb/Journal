import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['apod.nasa.gov', 'www.youtube.com'], // Add the domain hosting your images
      },
    webpack: (config) => {
      config.resolve.alias['@shared'] = path.resolve(__dirname, '../shared');
      return config;
  },
};

export default nextConfig;
