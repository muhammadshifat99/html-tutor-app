Minimal Android WebView app to practice HTML lessons

Structure:
- android/
  - app/
    - src/main/java/... MainActivity.java
    - src/main/assets/www/  (lesson web app files: index.html, lessons/, scripts/)

Build & run (using Android Studio):
1. Open the `android` folder in Android Studio.
2. Build and run on an emulator or device.

Notes:
- This is a minimal scaffold that loads `file:///android_asset/www/index.html` into a WebView.
- The lesson UI is static HTML/JS and stores progress in `localStorage`.
