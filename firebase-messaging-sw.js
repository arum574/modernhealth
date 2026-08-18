// Service worker for background push notifications when the PWA isn't in
// the foreground. Required by firebase_messaging on web. The config below
// must match lib/firebase_options.dart's `web` block — `flutterfire
// configure` does not update this file, so copy the values over by hand
// after running it.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDF5rzxPlvGBkkWoxVKQGA_nB_WivO4QsI',
  appId: '1:395370344807:web:c57cd510fa6f2de56c3fc2',
  messagingSenderId: '395370344807',
  projectId: 'modernhealth-82bf4',
});

firebase.messaging();
