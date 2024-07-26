import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import colors from "../../../assets/colors";
import useStore from "../../store/MainStore";

const TransferBottomSheet = ({ onSubmit }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = useStore((state) => state.cards);
  const credit = false;
  const cardItems = cards.map((card) => ({
    label: card.currency,
    value: card.id,
  }));
  //   const tempdat = [
  //     {
  //       id: Math.floor(Math.random() * 100000),
  //       title: "user",
  //       credit: false,
  //       amount: '00',
  //       time: new Date().toLocaleTimeString(),
  //     }]

  const handleSubmit = () => {
    onSubmit(description, name, amount, selectedCard, credit);
    setAmount[""];
    setDescription[""];
    setName[""];
    setSelectedCard[""];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💸 Transfer Money</Text>
      <Text style={styles.subtitle}>Pay anyone using KalamPay.</Text>

      <TextInput
        style={styles.input}
        placeholder="Recipient Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <View
        style={[
          styles.input,
          {
            borderRadius: 10,
            padding: 0,
            marginBottom: 20,
          },
        ]}
      >
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectedCard(value);
            console.log(value);
          }}
          items={cardItems}
          value={selectedCard}
          style={pickerSelectStyles}
          placeholder={{ label: "Select a card", value: null }}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    marginBottom: 0,
    fontFamily: "SFProDisplayBold",
    color: colors.backgroundColor,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "SFProDisplayMedium",
    color: colors.backgroundColor,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 30,
    color: "black",
    paddingRight: 30,
    marginBottom: 15,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 30,
    color: "black",
    paddingRight: 30,
    // marginBottom: 15,
  },
});

export default TransferBottomSheet;
