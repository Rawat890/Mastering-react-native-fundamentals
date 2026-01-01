import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loader({ loading }: { loading?: boolean }) {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
