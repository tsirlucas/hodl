import React, {ReactChildren} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

type LayoutProps = {children: ReactChildren};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.select({android: StatusBar.currentHeight, ios: 0}),
  },
});

export const Layout = ({children}: LayoutProps) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);
