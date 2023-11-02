import {defineConfig, loadEnv} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: '',
    plugins: [
      new VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: env['VITE_APP_NAME'],
          short_name: env['VITE_APP_SHORT_NAME'],
          description: env['VITE_APP_DESCRIPTION'],
          background_color: env['VITE_APP_BACKGROUND_COLOR'],
          theme_color: env['VITE_APP_THEME_COLOR'],
          icons: [
            {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png',
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
  });
};
