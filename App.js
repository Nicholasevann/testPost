import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import getData from './src/database/getData';

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) {
      getData().then(val => setData(val));
    }
  });
  if (data === null) {
    return <Text>Loading</Text>;
  }
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 24}}>Data Post</Text>
          <View
            style={{
              padding: 5,
              borderWidth: 1,
              flexDirection: 'row',
              width: '100%',
              backgroundColor: 'yellow',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.title}>No</Text>
            </View>
            <View style={{flex: 3}}>
              <Text style={styles.title}>Image</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.title}>Text</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.title}>Author</Text>
            </View>
          </View>
          {data.map((val, index) => {
            var no = index + 1;
            return (
              <View
                style={{
                  padding: 5,
                  borderWidth: 1,
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: 'white',
                  borderTopColor: 'white',
                }}>
                <View style={{flex: 1}}>
                  <Text style={styles.title}>{no}</Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: val.image}}
                    style={{width: 80, height: 80}}
                  />
                </View>
                <View style={{flex: 2}}>
                  <Text style={styles.title}>{val.text}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.title}>{val.owner.firstName}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {textAlign: 'center', fontSize: 14, color: 'black'},
});
