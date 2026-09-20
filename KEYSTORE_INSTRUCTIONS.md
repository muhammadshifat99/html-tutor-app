Create a signing keystore and add to GitHub Secrets

1. Create a keystore (locally):

```bash
keytool -genkeypair -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

2. Encode the keystore and add secrets to GitHub repo settings (Settings → Secrets → Actions):

```bash
base64 -w0 my-release-key.jks > key.b64
# then copy the content of key.b64 into the repository secret named KEYSTORE_BASE64
# set the other secrets:
# KEYSTORE_PASSWORD, KEY_ALIAS, KEY_PASSWORD
```

3. Once secrets are set, push to `main` and run the workflow. It will write the keystore and `gradle.properties` and build a signed APK.
