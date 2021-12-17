import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  movieDetailContainer: {
    flex: 1,
    // alignItems:'center',
    // backgroundColor: '#1B1B1B',
    alignItems: 'center',
  },
  centerImage: {
    alignItems: 'center',
    marginVertical: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  textView: {
    flex: 1,
    width: 300,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    width: 300,
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  suggestionView: {
    marginTop: 20,
  },
});
