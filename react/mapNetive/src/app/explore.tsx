import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">Explore</ThemedText>
        <ThemedText style={styles.description} themeColor="textSecondary">
          Temukan tempat dan rute yang ingin Anda kunjungi.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.six,
  },
  description: {
    marginTop: Spacing.two,
  },
});
