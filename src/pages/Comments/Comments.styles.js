import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
  },

  commentContainer: {
    width: 350,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding:10,

  },
  textAreaView:{
    width:'100%',
    borderTopWidth:2,
    
  },
  textAreaStyle:{
    width: 350,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding:10,
    alignSelf:'center',

  },
  firstCommentView:{
      height:200,
      alignItems:'center',
      justifyContent:'center',
  },
});
