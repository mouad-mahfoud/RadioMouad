import { ActivityIndicator, StyleSheet } from 'react-native';

import { AdMobBanner } from 'react-native-admob'
import React from 'react';
import { WebView } from 'react-native-webview';

const App: () => React$Node = () => {

  const [activityIndicator, setActivityIndicator] = React.useState(true)
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActivityIndicator(false); 
      console.log(activityIndicator);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const jsCode = `
  document.querySelector('header').remove();
  document.querySelector('footer').remove();
  document.querySelector('.head').remove();
  document.querySelector('.add-box-bottom').remove();
  document.querySelector('.content-holder').style.backgroundColor = '#002029';
  `;
  const hideSpinner = () => {
    setActivityIndicator(false)
  }
  return (
    <>
      {!activityIndicator ?  (
          <>
          <AdMobBanner
            adSize="smartBannerPortrait" adUnitID="ca-app-pub-1291130751392045/2994235013" testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
          <WebView source={{ uri: 'https://radio.co.ma/' }} originWhitelist={['https:/']} javaScriptEnabledAndroid={true} 
          injectedJavaScript={jsCode}
          style={{ width: '100%' }} />
        
          <AdMobBanner
            adSize="smartBannerPortrait" adUnitID="ca-app-pub-1291130751392045/2994235013" testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.error(error)}
          />
        </>
      )
    : (
    <ActivityIndicator
          style={{ height: '100%', width: '100%'}}
          size="large"
        />
        )
    }
   </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
