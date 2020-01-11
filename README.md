# Navigation

React Native (Navigation, Barcode Scanner)

# WARNING

This project was built in expo, that means ios and android folder should not be touched. But, I am still learning react native and confusing so just follow this rules below.

-   npm install
-   expo eject

# iOS

-   to run app in iOS ("cd ios", then "pod install") | go back "cd .."| npm run ios

# Android

-   Install JDK and JRE : https://www.oracle.com/technetwork/java/javase/downloads/index.html and https://www.java.com/de/download/
-   Set JAVA_HOME in system variables : https://mkyong.com/java/how-to-set-java_home-on-windows-10/
-   in Path add jdk and jre : https://stackoverflow.com/questions/55883754/java-home-is-not-set-error-after-running-react-native-app
-   create local.properties in android folder : https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil
-   build project ("./gradlew clean")
-   setting NOX Player as emulator : https://github.com/facebook/react-native/issues/13397 and https://www.youtube.com/watch?v=cBUhcRZ5BPM (nox_adb.exe connect 127.0.0.1:62001

---

## setting NOX Player as emulator

Mobile Emulator (NOX)
(For this solution to work, you need to have NOX emulator with api >= 5) here are the steps to do that:

Open Multi-Drive, a software installed with NOX by default. It will be visible on desktop but if in case its not then locate the NOX installed folder (most probably: ProgramFiles (x86)/NOX/bin) and you can find it there.
Delete the default NOX emulator.
At the bottom you will have a button, click that and download emulator 5.
With in the Multi-drive, take the backup of the emulator in case this doesn't work for you after downloading.
Enable USB debugging in the emulator
Connectivity:

Go to Android SDK Platform Tools folder (Android/sdk/platform-tools)
Copy these file (adb.exe, AdbWinApi.dll, AdbWinUsbApi.dll and rename adb.exe to nox_adb.exe
Go to Nox/bin folder and paste these files copied on step 2 - Overwrite all
then just go to the react native project folder and write react-native run-android

---

-   to run app in android | npm run android

# on Mac problems

-   on Mac, please install adb if your machine doesnt exist. ("brew cask install android-platform-tools") : https://stackoverflow.com/questions/17901692/set-up-adb-on-mac-os-x
-   if adb connection is broken ("adb kill-server") : https://stackoverflow.com/questions/29198327/android-studio-emulator-is-running-but-not-showing-up-in-run-app-choose-a-runn
-   SDK location not found : https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found

# FEATURE

-   Barcode Scanner : https://docs.expo.io/versions/latest/sdk/bar-code-scanner/ (using Permissions.CAMERA)
-   Navigation : https://reactnavigation.org/docs/en/common-mistakes.html#docsNav (common mistakes)

# Problems

-   this.props.navigation.state.params is undefined : https://github.com/react-navigation/react-navigation/issues/1237 and https://reactnavigation.org/docs/en/params.html
-   get Input from TextInput : https://stackoverflow.com/questions/52962421/how-to-get-the-value-of-textinput-in-react-native-without-using-state
