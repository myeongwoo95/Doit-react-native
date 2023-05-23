/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

type SectionProps = PropsWithChildren<{
  title: string
}>

export default function App() {
  // console.log('app start');
  // const textElement = React.createElement(Text, null, 'hello world!1'); // 가상 돔 객체를 생성

  const children = [<Text>123</Text>, <Text>123</Text>, <Text>ccc</Text>]
  return <SafeAreaView>{children}</SafeAreaView>
}
