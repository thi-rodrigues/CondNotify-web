import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'cond-notify-web',
  webDir: 'dist',
  server: {
    url: 'https://thi-rodrigues.github.io/cond-notify-web/', // ou Render, Vercel, etc.
    cleartext: true
  }};

export default config;
