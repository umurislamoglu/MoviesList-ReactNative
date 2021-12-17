import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Button } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/core';
import ImageContainer from '../../components/ImageComponent/ImageContainer';
import styles from './MovieDetail.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import useSameGenre from './useSameGenre';
import SmallCard from './../../components/SmallCard';
import routes from '../../navigation/routes';


export default function MovieDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const {movie, posterUri} = route.params;

  const {name, rate, genre, director, brief, cast , id} = movie;

  const {moviesByGenre, sameGenreLoading} = useSameGenre({genres: genre});

  const renderItem = ({item}) => {
    return <SmallCard movie={item} />;
  };

const handleCommentButtonPress = () => {
  navigation.navigate(routes.COMMENTS_PAGE,{id})
}

  return (
    <SafeAreaView style={styles.movieDetailContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centerImage}>
            <ImageContainer posterUri={posterUri} />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{name}</Text>
            <Text>
              {rate} <Icon name="star" color="orange" size={15} />
            </Text>
          </View>
          <Text style={styles.headerText}>Genre</Text>

          <View>
            {genre.map((gnr, idx) => {
              return <Text key={idx}>{gnr}</Text>;
            })}
          </View>

          <Text style={styles.headerText}>Director</Text>
          <Text>{director}</Text>

          <Text style={styles.headerText}>Plot History</Text>
          <Text>{brief}</Text>

          <Text style={styles.headerText}>Cast</Text>
          <View>
            {cast.map((star, idx) => {
              return <Text key={idx}>{star}</Text>;
            })}
          </View>
          <Button title="See Reviews" onPress={handleCommentButtonPress}/>
          <View style={styles.suggestionView}>
            <Text  style={styles.headerText}>Suggestions</Text>
            {sameGenreLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              moviesByGenre.length > 0 && (
                <FlatList
                  data={moviesByGenre}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal
                />
              )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
