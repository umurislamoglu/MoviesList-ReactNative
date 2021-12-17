import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MovieCard.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import routes from '../../navigation/routes';
import ImageContainer from './../ImageComponent/ImageContainer';

export default function MovieCard({movie}) {
  const {name, rate, genre, brief} = movie;

  const navigation = useNavigation();

  const posterUri = `https://picsum.photos/id/${Math.floor(
    Math.random() * (500 - 100 + 1) + 100,
  )}/200/300`;

  const handlePress = () => {
    navigation.navigate(routes.MOVIE_DETAIL_PAGE, {
      movie: movie,
      posterUri: posterUri,
    });
  };

  return (
    <View style={styles.card}>
      <ImageContainer posterUri={posterUri} />
      <View style={styles.cardFooterContainer}>
        <View style={styles.movieTitleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.rating}>Rating : {rate}</Text>
          <Text style={styles.brief} numberOfLines={2}>
            {brief}
          </Text>
          <View style={styles.genreContainer}>
            {genre.map((gnr, index) => {
              return (
                <Text key={index} style={styles.genre}>
                  {gnr}
                </Text>
              );
            })}
          </View>
        </View>
        <TouchableOpacity style={styles.icon} onPress={handlePress}>
          <Icon name="rightcircle" color="orange" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
