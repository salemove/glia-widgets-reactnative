import React, { useState } from 'react'
import {
  Button,
  NativeModules,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const { GliaSdkModule } = NativeModules

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const [appToken, setAppToken] = useState('')
  const [apiToken, setApiToken] = useState('')
  const [siteId, setSiteId] = useState('')
  const [queueId, setQueueId] = useState('')

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <Text>App token</Text>

        <TextInput
          style={styles.inputStyle}
          value={appToken}
          placeholder="App token"
          onChangeText={(newValue: string) => {
            setAppToken(newValue)
          }}
        />

        <Text>Api token</Text>
        <TextInput
          style={styles.inputStyle}
          value={apiToken}
          placeholder="Api token"
          onChangeText={(newValue: string) => {
            setApiToken(newValue)
          }}
        />
        <Text>Site identifier</Text>
        <TextInput
          style={styles.inputStyle}
          value={siteId}
          placeholder="Site identifier"
          onChangeText={(newValue: string) => {
            setSiteId(newValue)
          }}
        />
        <Text>Queue identifier</Text>
        <TextInput
          style={styles.inputStyle}
          value={queueId}
          placeholder="Queue identifier"
          onChangeText={(newValue: string) => {
            setQueueId(newValue)
          }}
        />

        <Button
          title="Start engagement"
          onPress={() => {
            GliaSdkModule.configure({
              appToken: appToken,
              apiToken: apiToken,
              siteId: siteId,
              queueId: queueId,
            })
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  inputStyle: {
    height: 60,
    fontSize: 21,
    paddingBottom: 32,
  },
})

export default App
