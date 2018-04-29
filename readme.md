## Requirements ##

- npm __v5.6.0__
- node JS  __v6.11.3__
- react-native cli  __v2.0.1__
- react __v0.55.2__


## Depedencies ##

https://www.npmjs.com/package/react-native-typography



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


- Last thing you have to do is release the APK by running these command
  cd android && ./gradlew assembleRelease


