import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CounterList extends React.Component {
  render() {
    return (
      <View style={styles.counterList}>
        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <View style={styles.decreaseButton}>
              <Text style={styles.decrease}>-</Text>
            </View>
            <View style={styles.countButton}>
              <Text style={styles.count}>23</Text>
            </View>
            <View style={styles.increaseButton}>
              <Text style={styles.increase}>+</Text>
            </View>
          </View>
        </View>

        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <View style={styles.decreaseButton}>
              <Text style={styles.decrease}>-</Text>
            </View>
            <View style={styles.countButton}>
              <Text style={styles.count}>23</Text>
            </View>
            <View style={styles.increaseButton}>
              <Text style={styles.increase}>+</Text>
            </View>
          </View>
        </View>

        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <View style={styles.decreaseButton}>
              <Text style={styles.decrease}>-</Text>
            </View>
            <View style={styles.countButton}>
              <Text style={styles.count}>23</Text>
            </View>
            <View style={styles.increaseButton}>
              <Text style={styles.increase}>+</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterList: {
    width: '100%',
    flex: 1,
    paddingTop: 90,
  },
  counterItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingBottom: 25,
  },
  counterTitle: {
    fontSize: 20,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  counterNumber: {
    fontSize: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  countButton: {
    backgroundColor: '#FBBA72',
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
  },
  increaseButton: {
    backgroundColor: '#FBBA72',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  increase: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  decreaseButton: {
    backgroundColor: '#FBBA72',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decrease: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CounterList;