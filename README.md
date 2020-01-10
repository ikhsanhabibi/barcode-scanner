# Navigation
React Native (Navigation, Barcode Scanner)


# WARNING
This project was built in expo, that means ios and android folder should not be touched. But, I am still learning react native and confusing so just follow this rules below.

- npm install
- expo eject

# iOS
- to run app in iOS ("cd ios", then "pod install") | go back "cd .."| npm run ios

# Android
- create local.properties in android folder : https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil
- on Mac, please install adb if your machine doesnt exist. ("brew cask install android-platform-tools") : https://stackoverflow.com/questions/17901692/set-up-adb-on-mac-os-x
- if adb connection is broken ("adb kill-server") : https://stackoverflow.com/questions/29198327/android-studio-emulator-is-running-but-not-showing-up-in-run-app-choose-a-runn
- SDK location not found : https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found
- build project ("./gradlew clean")
- to run app in android | npm run android
