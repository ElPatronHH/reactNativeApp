import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
let resultado

const Lista = ({ data }) => {
    return (
      <View>
        {data.map((item, index) => (
          <Card
            key={index}
            nombre={item.nombre}
            nacionalidad={item.nacionalidad}
          />
        ))}
      </View>
    );
  };

export default Lista;