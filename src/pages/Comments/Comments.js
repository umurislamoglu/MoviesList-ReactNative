import React, {useState, useEffect} from 'react';
import styles from './Comments.styles';
import { View, Text, ActivityIndicator, FlatList, TextInput, Button } from 'react-native';
import useMoviesData from '../Movies/useMoviesData';
import {useRoute} from '@react-navigation/core';

export default function Comments() {
  const [movieComments, setMovieComments] = useState([]);
  const [clientComment, setClientComment] = useState("")
  const {comments, pending, filterCommentsByMovieId} = useMoviesData();
  const route = useRoute();

  const {id} = route.params;


  const renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text>{item.comment}</Text>
      </View>
    );
  };

  const onSendCommentPress = () => {
 
    let newComment = {
        id: Math.random().toString(36).substr(2, 9),
        movieId: id,
        comment : clientComment,   
     }

     let newCommentArr = [...movieComments , newComment ]
     setMovieComments(newCommentArr)
  }

  useEffect(() => {
    let filtered = filterCommentsByMovieId(id);
    setMovieComments(filtered);
  }, [comments]);

  return (
    <View style={styles.pageContainer}>
      {pending ? (
        <ActivityIndicator size="large" />
      ) : (
        movieComments.length>0?
        <FlatList
          data={movieComments}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />:
        <View style={styles.firstCommentView}>
            <Text>Be the First Commentor</Text>
        </View>
      )}
      <View style={styles.textAreaView}>
      <TextInput
      style={styles.textAreaStyle}
      placeholder="Add a Comment"
      onChangeText={setClientComment}
      value={clientComment}
      />
      <Button title="Send" onPress={onSendCommentPress}/>
      </View>
    </View>
  );
}
