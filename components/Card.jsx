import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import miImagenLocal from '../images/aczino.jpeg';

const Card = ({ nombre, nacionalidad }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.nacionalidad}>{nacionalidad}</Text>
      {/*<Text>{parseInt(nombre) + parseInt(nacionalidad)}</Text>*/}
      <Image
        source={miImagenLocal}
        style={styles.imagen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  imagen: {
    width: 200,
    height: 200,
  },
  nacionalidad: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Card;