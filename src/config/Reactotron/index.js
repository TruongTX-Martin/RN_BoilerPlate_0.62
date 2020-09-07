import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  name: 'React Native Demo',
  /*If you want to connect Android for debug*/
  // host: '10.80.0.88',
  host: '10.20.1.12',
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: {veto: (stackFrame) => false}, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();

console.log = Reactotron.log;