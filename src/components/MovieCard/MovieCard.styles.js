import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    marginTop: 20,
  },

  poster: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  cardFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'white',
  },
  movieTitleContainer: {
    position: 'absolute',
    width: 350,
    height: 100,
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: 'white',
  },
  rating: {
    color: 'white',
  },
  brief: {
    color: 'white',
    width: 240,
  },
  genre: {
    color: 'white',
    marginRight: 10,
    fontSize: 10,
    fontStyle: 'italic',
  },
  icon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
});
