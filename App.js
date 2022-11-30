import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Dirs, FileSystem} from 'react-native-file-access';
import {WebView} from 'react-native-webview';

const path = `${Dirs.DocumentDir}/test.html`;

const App = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    FileSystem.writeFile(
      path,
      '<html><h1>File Access is working if you are reading this.</h1></html>',
      'utf8',
    ).then(() => {
      setReady(true);
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      {ready && <WebView source={{uri: path}} allowFileAccess={true} />}
    </SafeAreaView>
  );
};

export default App;
