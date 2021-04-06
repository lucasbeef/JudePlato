import React, { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { Button, Incubator } from 'react-native-ui-lib';

const { TextField } = Incubator;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: 400,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

type PropsType = {
  modalVisible: boolean,
  onValidate: (name: string) => void,
  closeModal: () => void,
}

const NewPlayerModal = ({
  modalVisible,
  onValidate,
  closeModal,
}: PropsType) => {
  const [name, setName] = useState('');

  function handleValidate() {
    onValidate(name);
    setName('');
    closeModal();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
      style={styles.modal}
    >
      <View style={styles.content}>
        <TextField
          label="Name"
          placeholder="Georges"
          value={name}
          onChangeText={setName}
        />
        <Button label="Create" onPress={handleValidate} />
      </View>
    </Modal>
  );
};

export default NewPlayerModal;
