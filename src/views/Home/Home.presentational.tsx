import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {HomeProps} from './Home.container';
import {styles} from './Home.styles';

type ListItemProps = {item: HomeProps['persons'][0]};
const ListItem = ({item}: ListItemProps) => (
  <View style={styles.listItem}>
    <Text style={styles.listItemText}>Name: {item.name}</Text>
    <Text style={styles.listItemText}>Age: {item.age}</Text>
  </View>
);

type HomePresentationalProps = {persons: HomeProps['persons']};
export const HomePresentational = ({persons}: HomePresentationalProps) => (
  <View style={styles.container}>
    <FlatList
      data={persons}
      renderItem={ListItem}
      keyExtractor={(_item, index) => index.toString()}
    />
  </View>
);
