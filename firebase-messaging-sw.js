// Service worker for background push notifications when the PWA isn't in
// the foreground. Required by firebase_messaging on web. The config below
// must match lib/firebase_options.dart's `web` block — `flutterfire
// configure` does not update this file, so copy the values over by hand
// after running it.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'REPLACE_WITH_FLUTTERFIRE_CONFIGURE_OUTPUT',
  appId: 'REPLACE_WITH_FLUTTERFIRE_CONFIGURE_OUTPUT',
  messagingSenderId: 'REPLACE_WITH_FLUTTERFIRE_CONFIGURE_OUTPUT',
  projectId: 'REPLACE_WITH_FLUTTERFIRE_CONFIGURE_OUTPUT',
});

firebase.messaging();
