import loadScript from 'load-script';

export const pageId = "100206608829452";

let initialized = false;
let queue = [];

export default function fb(callback) {
  if (initialized) {
    callback(window.FB);
  } else {
    queue.push(callback);
    if (!window.fbAsyncInit) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: pageId,
          autoLogAppEvents: true,
          status: true,
          cookie: true,
          xfbml: true,
          version: 'v10.0',
        });
        initialized = true;
        queue.forEach(cb => cb(window.FB));
        queue = null;
      };
      const script = window.localStorage.getItem('fb:debug') === 'true'
        ? 'xfbml.customerchat/debug.js'
        : 'xfbml.customerchat.js';
      loadScript(`https://connect.facebook.net/en_US/sdk/${script}`, { async: true });
    }
  }
}