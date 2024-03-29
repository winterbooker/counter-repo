import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class CounterList extends React.Component {
  state = {
    count: 0,
  }

  handlePlusButton() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  handleMinusButton() {
    const { count } = this.state;
    if (count > 0) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  }

  renderCounter({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('CounterDetail', { counter: item }); }}>
        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>{item.body.substring(0, 10)}</Text>
          <View style={styles.counterNumber}>
            <TouchableHighlight
              style={styles.decreaseButton}
              onPress={this.handleMinusButton.bind(this)}
            >
              <Text style={styles.decrease}>-</Text>
            </TouchableHighlight>
            <View style={styles.countButton}>
              <Text style={styles.count}>
                { this.state.count }
              </Text>
            </View>
            <TouchableHighlight
              style={styles.increaseButton}
              onPress={this.handlePlusButton.bind(this)}
            >
              <Text style={styles.increase}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.counterList}>
        <FlatList data={this.props.counterList} renderItem={this.renderCounter.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterList: {
    width: '100%',
    flex: 1,
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
