import React, {useState, useEffect} from 'react';
import {View, Text, Button, ActivityIndicator, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MovieCard from '../../components/MovieCard';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './Movies.styles';
import useMoviesData from './useMoviesData';

export default function Movies() {
  const {movies, genres, error , fetchbyGenre, pending , } = useMoviesData();
  const [movieData, setMovieData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  const [genreArrWithAllGenre , setGenreArrWithAllGenre] = useState([]);

  
  const renderItem = ({item}) => {
    return <MovieCard movie={item} />;
  };

  const rowTextForSelection = item => {
    return item.name;
  };

  const buttonTextAfterSelection = selectedItem => {
    return selectedItem.name;
  };

  const handleSelect = item => {
    setSelectedGenre(item);
  };

  useEffect(() => {
    setMovieData(movies);
    setGenreArrWithAllGenre([{id:"dba3d628-55de-11ec-bf63-0242ac123557" ,name:"ALL"}, ...genres])
  }, [movies,genres]);

  useEffect(() => {
    if (!selectedGenre) {
      return;
    }
    if (selectedGenre.name==="ALL") {
      setMovieData(movies);
      return
    }
    let genreArr = [];
    genreArr.push(selectedGenre.name);
    let selectedMovies = fetchbyGenre(genreArr);
    setMovieData(selectedMovies);
  }, [selectedGenre, setMovieData]);

  if (error) {
    Alert.alert('MovieApp', 'An error occurred');
  }

  return (
    <View style={styles.movieListContainer}>
      <SelectDropdown
        data={genreArrWithAllGenre}
        rowTextForSelection={rowTextForSelection}
        buttonTextAfterSelection={buttonTextAfterSelection}
        defaultButtonText="Select a Genre"
        onSelect={handleSelect}
      />

      {pending ? (
        <ActivityIndicator size="large" />
      ) : (
        
        <FlatList
          data={movieData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}
