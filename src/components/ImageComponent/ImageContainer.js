import React from 'react'
import {Image } from 'react-native'
import styles from './ImageContainer.styles';


export default function ImageContainer({posterUri}) {
    return (
      
        <Image
        style={styles.big}
        source={{
          uri: posterUri,
        }}
      />
        
      
    )
}

export function SmallImageContainer({posterUri}){
  return (
      
    <Image
    style={styles.small}
    source={{
      uri: posterUri,
    }}
  />
    
  
)
}