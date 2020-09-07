================ ANDROID ================

1. install on device
npx react-native run-android

2. start bundler
npm start

3. build
cd android
./gradlew assembleRelease  (for macOS)
gradlew assembleRelease  (for Windows)
cd ..
(another way, you can build app by android studio)

4. clean build
cd android
./gradlew clean  (for macOS)
gradlew clean  (for Windows)
cd ..

================== IOS ==================

1. install on device
npx react-native run-ios 
(or you can run app by xcode. 
go to /ios folder
double click to MiniTV.xcworkspace
and then xcode be opened
in top left of xcode, select device to install app
after that, click to run icon and wait for installing)

2. start bundler 
npm start