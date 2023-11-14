import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Lista from "./components/Lista";
import * as ImagePicker from "expo-image-picker";
import { Permissions } from 'expo-permissions';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';

export default function App() {
  const [nombreValue, setNombre] = useState("");
  const [nacionalidadValue, setNacionalidad] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Se requieren permisos para acceder a la galería de imágenes.');
        }
      } catch (error) {
        console.error('Error al solicitar permisos:', error);
      }
    })();
  }, []);

  const [data, setData] = useState([
    {
      nombre: "Nach",
      nacionalidad: "Rapero Español",
    },
    {
      nombre: "Aczino",
      nacionalidad: "Rapero Mexicano",
    },
  ]);

  const agregarDatos = () => {
    const nuevoDato = {
      nombre: nombreValue,
      nacionalidad: nacionalidadValue,
    };

    setData([...data, nuevoDato]);
    setNombre("");
    setNacionalidad("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNombre(text)}
            value={nombreValue}
            placeholder="Escribe algo..."
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Nacionalidad:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNacionalidad(text)}
            value={nacionalidadValue}
            placeholder="Escribe algo..."
          />
        </View>
      </View>
      <Button title="Seleccionar Imagen" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      <Button title="Cargar" onPress={agregarDatos} />
      <Lista data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    marginRight: 10,
    flex: 1,
  },
  input: {
    padding: 16,
  },
});
