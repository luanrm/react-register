import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView
} from "react-native";
import TextInputMask from 'react-native-text-input-mask';

class App extends Component {
  state = {
    registerVisible: true,
    customer: {
      external_id: "#3311",
      name: "Luan Rodrigues",
      type: "individual",
      country: "br",
      email: "mopheus@nabucodonozor.com",
      documents: [
        {
          type: "cpf",
          number: "62807862004"
        }
      ],
      phone_numbers: ["+5511999998888"],
      birthday: "1965-01-01"
    }
  };

  setRegisterVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { registerVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          presentationStyle=""
          animationType="slide"
          transparent={true}
          visible={registerVisible}
        >
          <ScrollView>
            <View style={{
              flex: 1,
              justifyContent: "flex-end",
            }}>

              <View style={styles.modalView}>

                <TouchableHighlight
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    margin: 10,
                  }}
                  onPress={() => {
                    this.setRegisterVisible(!registerVisible);
                  }}
                >
                  <Text>X</Text>
                </TouchableHighlight>
                <Text>Dados Pessoais</Text>

                <TextInput
                  placeholder="Nome"
                  style={{ width: '90%', margin: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                  onChangeText={text => this.setState({ ...this.state.customer, name: text })}
                />

                <TextInput
                  placeholder="Email"
                  style={{ width: '90%', margin: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                  onChangeText={text => this.setState({ ...this.state.customer, email: text })}
                />

                <TextInputMask
                  mask={"+55 ([99]) [99999]-[9999]"}
                  placeholder="Telefone"
                  style={{ width: '90%', margin: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                  onChangeText={(text, puretext) => { console.log(puretext) }}
                />

                <TextInputMask
                  mask={"[99]/[99]/[9999]"}
                  placeholder="Data de Nascimento"
                  style={{ width: '90%', margin: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                  onChangeText={(text, puretext) => { console.log(puretext) }}
                />

                <TextInputMask
                  mask={"[999].[999].[999]-[99]"}
                  placeholder="CPF"
                  style={{ width: '90%', margin: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                  onChangeText={(text, puretext) => { console.log(puretext) }}
                />

                <TextInput
                  placeholder="Senha"
                  style={{ width: '90%', margin: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                  onChangeText={text => this.setState({ ...this.state.customer, birthday: text })}
                />

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setRegisterVisible(!registerVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Continuar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </Modal>


        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setRegisterVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Register Customer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
