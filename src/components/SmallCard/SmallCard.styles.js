import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    
    width: 150,
    height: 200,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    marginRight: 20,
    
  },


  cardFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'white',
    
  },
  movieTitleContainer: {
    position: "absolute",
    width: 150,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: "white",
  },
  
  icon: {
    position: 'absolute',
    right: 5,
    bottom: 5 ,
  },
});
