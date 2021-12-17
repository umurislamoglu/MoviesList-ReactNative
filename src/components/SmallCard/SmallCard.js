import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SmallCard.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import routes from '../../navigation/routes';
import {SmallImageContainer} from './../ImageComponent/ImageContainer';

export default function SmallCard({movie}) {
  const {name} = movie;

  const navigation = useNavigation();

  const posterUri = `https://picsum.photos/id/${Math.floor(
    Math.random() * (500 - 100 + 1) + 100,
  )}/200/300`;

  const handlePress = () => {
    navigation.navigate(routes.MOVIE_DETAIL_PAGE, {movie:movie , posterUri:posterUri});
  };

  return (
    <View style={styles.card}>
      <SmallImageContainer posterUri={posterUri} />
      <View style={styles.cardFooterContainer}>
        <View style={styles.movieTitleContainer}>
          <Text style={styles.title}>{name}</Text>
          
        </View>
        <TouchableOpacity style={styles.icon} onPress={handlePress}>
          <Icon name="rightcircle" color="orange" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
