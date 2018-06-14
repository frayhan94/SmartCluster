## Requirements ##

- npm __v5.6.0__
- node JS  __v6.11.3__
- react-native cli  __v2.0.1__
- react __v0.55.2__


## Depedencies ##

https://www.npmjs.com/package/react-native-typography

## Debugging Setup ##

To view the value from code into your browser you can do following step

IOS

- Press Command + D on simulator
- Press Remote JS Debugging
- Open this link in the browser  http://localhost:8081/debugger-ui
- From there you can see the value inside inspecting window of the browser
- If you want to see the log for react-native ios then run this command react-native log-ios
- If you want to sese the log for react-native android then run this command react-native log-android

## Development Setup ##

_IOS On Mac_

Setup edit configurations on WebStorm like following

- Open edit configuration under run menu
- Choos React Native
- Fill these options
- Node Interpreter ( /usr/local/bin/node )
- React Native Package ( /usr/local/lib/node_modules/react-native-cli )
- Working Directory ( /Users/mmdc/Documents/mataharimall-development/www/kas-online )
- There are some checkbox on the dialog just check the checkbox for Activate Tool Windows
  on the bottom path
- Once all set up just run the package by clicking the __green start button__
- In another terminal tabs please type __react-native run-ios__

## Another Tips ##

- Please run react-native upgrade to regenerate the folder for IOS and Android inside the root project
- You also needs sometimes to CD to your QRCodeScanner under your node_modules and run npm install
   to install the dependency for react-native-camera

## Apps Color Scheme ##

#### Primary Color ####

- Red Garnet RGB(96,23,13) (Stronger)
- Red Crimson RGB(185,53,35)
- Red Ruby RGB(145,39,25) (Smoother)

#### Secondary Color ####

- Powder RGB (238,239,234) (Stronger)
- Daisy RGB (255,255,255)
- Porcelain RGB(255,254,242) (Smoother)

#### How to generate APK for android ####

- Type this command to export the adb command
  export PATH="/Users/myuser/Library/Android/sdk/platform-tools":$PATH
- keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
- place that generated key under android/app folder
- edit the file for ~/.gradle/gradle.properties or android/gradle.properties

  Add these following setting

  MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-key-alias
  MYAPP_RELEASE_STORE_PASSWORD=*****
  MYAPP_RELEASE_KEY_PASSWORD=*****

- edit the file under android/app/build.gradle and fill with these setting

  android {
    defaultConfig { }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}

- After that you have to do is release the APK by running these command
  cd android && ./gradlew assembleRelease

- If needed you can run this command to make sure everything works
  react-native run-android --variant=release

- Make sure the folder assets exist inside android/app/src/main

- Finally you have to run below command to generate real apk
  react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

#### To test your apk inside your real android device ####

- cd to /Users/mmdc/Library/Android/sdk/platform-tools
- Run this command if you get error 'cacheBridge'
  ./adb reverse tcp:8081 tcp:8081
- After that run this command
  /adb install ~/Documents/mataharimall-development/www/my_camera/android/app/build/outputs/apk/app-debug.apk
- If there is already APK inside your phone then place -r after install so the command
  may seems like this

  adb install -r ./app/build/outputs/apk/app-release-unsigned.apk

#### How to create android virtual device ####

Android/sdk/tools/bin/avdmanager create avd --force --name testAVD --abi google_apis/x86_64 --package 'system-images;android-23;google_apis;x86_64'

#### How to launch android emulator ####
Android/sdk/tools/emulator -avd testAVD


