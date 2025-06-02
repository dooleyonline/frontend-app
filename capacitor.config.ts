import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dooleyonline.app',
  appName: 'dooleyonline',
  //webDir: 'build' we use local server instead
  server: {
    url: "http://10.0.0.173:3000",
    cleartext: true
  }
};

export default config;
