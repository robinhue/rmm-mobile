import react, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { color, font, form, margin, space } from "../../styles";
import Button from "../Button";

export default function MenuModal({visible, hide, addMenu}) {

  const [name, setName] = useState('')

  function onSave() {
    if (name) {
      const menu = {name: name, order: 0, size: 0 }
      addMenu(menu)
      setName('')
      hide()
    } else {
      alert('Preencha todos os campos')
    }
  }

  return <Modal
    animationType="slide"
    visible={visible}
    transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Cardápios</Text>
            <TouchableOpacity onPress={hide}>
              <Icon name='close' size={font.size.lg} color={color.dark}></Icon>
            </TouchableOpacity>
          </View>

          {/* Body */}
          <View style={styles.body}>
            <View style= {margin.bottom.md}>
              <Text style={form.label}>Nome</Text>
              <TextInput 
              style={form.input}
              value={name}
              onChangeText={setName}
              ></TextInput>
            </View>

            <Button title='Salvar' onPress={onSave}></Button>
          </View>
        </View>
      </View>
    </Modal>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: font.family,
    fontSize: font.size.xl,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#000',
  },
  modal: {
    padding: space.md,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingBottom: space.sm,
    marginBottom: space.sm,
    borderBottomWidth: 1

  }
})