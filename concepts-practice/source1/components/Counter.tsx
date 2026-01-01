import { fontNames } from '@/utils/fontfamily';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  const IncrementCount = () => {
    setCount(prev => prev + 1);
  }

  const DecrementCount = () => {
    setCount(prev => Math.max(0, prev - 1));
  }

  const ResetCount = () => {
    setCount(0)
  }

  const questions = [
    {
      id: 1,
      title: 'Is re-rendering occurring on every click?',
      answer: 'Every time setCount is called, React updates state → the component re-renders. useState triggers a re-render when state changes. count is part of render output'
    },
    {
      id: 2,
      title: 'Can we prevent re-rendering here?”',
      answer: 'No — we should not prevent re-rendering in this case. The UI depends on count. So preventing the state update would lead to state UI'
    },
    {
      id: 3,
      title: 'How can we reduce unnecessary re-renders?',
      answer: 'Use functional state updates to avoid stale closures: setCount(prev => prev + 1)',
      extra: 'Works correctly in concurrent rendering. Prevents bugs when updates are batched'
    },
    {
      id: 4,
      title: 'What happens if I click increment twice very fast?',
      answer: 'React may batch state updates.',
      extra: 'Works correctly in concurrent rendering. Prevents bugs when updates are batched.\n setCount(count + 1) setCount(count + 1) may lead to only one increment if batched.',
    },
    {
      id: 5,
      title: 'Is IncrementCount recreated on every render?',
      answer: 'Yes functions defined inside the componen t body are created on every render.',
    },
    {
      id: 6,
      title: 'Should we use useCallback here?”',
      answer: 'No child components relying on referential equality',
    },
    {
      id: 7,
      title: 'What if this counter had 100 child components?',
      answer: 'Extract buttons into child components and useReact.memo to prevent unecessary re-renders.',
    },
    {
      id: 8,
      title: 'Why check if (count <= 0) in DecrementCount?',
      answer: 'setCount(prev => Math.max(0, prev - 1)) Single source of truth.',
    },
    {
      id: 9,
      title: 'How does reconciliation work here?',
      answer: 'Reconciliation is the process where React.\n 1. Creates a new virtual tree after state change.\n 2. Diffs it against the previous tree.\n 3. Determines the minimal set of updates.\n 4. Applies those updates to the renderer (DOM or Native)',
      extra:'Reconciliation happens in JavaScript, not in the native layer.'
    },
    {
      id: 10,
      title: 'What is “batching” in React?',
      answer: 'React groups multiple state updates together and processes them in a single re-render instead of re-rendering after each update.'
    },
  ]

  const renderItem = (item: any) => {
    return (
      <View key={item.id} style={{ marginVertical: 10 }}>
        <Text style={styles.questionTitle}><Text>Ques {item.id}. </Text>{item.title}</Text>
        <Text style={styles.answer}>{item.answer}</Text>
        {item.extra && <Text style={styles.extra}>{item.extra}</Text>}
      </View>
    )
  }

  const ReactNativeVsDOMRendering = () => {
    return (
      <View style={styles.table}>
        {/* Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText]}>React DOM</Text>
          <Text style={[styles.cell, styles.headerText]}>React Native</Text>
        </View>

        {/* Row 1 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Renders HTML elements like div, span</Text>
          <Text style={styles.cell}>Renders native UI components like UIView, Android View</Text>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Uses the browser DOM</Text>
          <Text style={styles.cell}>Does not use the DOM</Text>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Styled using CSS</Text>
          <Text style={styles.cell}>Styled using JavaScript objects</Text>
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Updates DOM nodes</Text>
          <Text style={styles.cell}>Sends commands to native UI layer</Text>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Runs in browser environment</Text>
          <Text style={styles.cell}>Runs on mobile devices</Text>
        </View>
      </View>
    );

  }
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.counterContainer}>
        <Text style={styles.currentCountText}>Current Count:
          <Text style={styles.countText}>{count}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Increment counter' onPress={IncrementCount} color='blue' />
        <Button title='Decrement counter' onPress={DecrementCount} color='red' />
        <Button title='Reset counter' onPress={ResetCount} color='grey' />
      </View>

      {
        questions.map((item) => {
          return (
            renderItem(item)
          )
        })
      }

      {ReactNativeVsDOMRendering()}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 16,
    fontFamily: fontNames.medium,
  },
  currentCountText: {
    fontSize: 16,
    fontFamily: fontNames.medium
  },
  buttonContainer: {
    marginVertical: 12
  },
  button: {
    marginVertical: 10
  },
  questionTitle: {
    fontFamily: fontNames.medium,
    fontSize: 16,
  },
  answer: {
    fontFamily: fontNames.regular,
    fontSize: 14,
    marginVertical: 2
  },
  extra: {
    fontFamily: fontNames.italic,
    fontSize: 12,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
  },
  headerRow: {
    backgroundColor: '#f2f2f2',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontFamily: fontNames.regular,
    fontSize: 14,
  },
  headerText: {
    fontFamily: fontNames.medium,
    fontSize: 15,
  },
})