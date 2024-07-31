import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import colors from "../../../assets/colors";
import useStore from "../../store/MainStore";
import Modal from "react-native-modal";

const TransferBottomSheet = ({ onSubmit }) => {
  const indFlag = require("../../../assets/images/indFlag.png");
  const usaFlag = require("../../../assets/images/usaFlag.png");
  const ukFlag = require("../../../assets/images/ukFlag.png");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const cards = useStore((state) => state.cards);
  const credit = false;
  const cardItems = cards.map((card) => ({
    label: card.currency,
    value: card.id,
    number: card.accountNumber,
  }));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const mainBalance = useStore((state) => state.mainBalance);
  const handleCardSelect = (card) => {
    setSelectedCard(card);
    setIsModalVisible(false);
  };

  //   const tempdat = [
  //     {
  //       id: Math.floor(Math.random() * 100000),
  //       title: "user",
  //       credit: false,
  //       amount: '00',
  //       time: new Date().toLocaleTimeString(),
  //     }]

  const handleSubmit = () => {
    if (amount > 0) {
      onSubmit(description, name, amount, selectedCard, credit);
    }
    setAmount[""];
    setDescription[""];
    setName[""];
    setSelectedCard[""];
  };

  const CardOption = () => {
    return (
      <TouchableOpacity
        style={styles.currencyContainer}
        onPress={() => setIsModalVisible(true)}
      >
        {selectedCard.label === "INR" ? (
          <Image source={indFlag} style={styles.flagIcon} />
        ) : selectedCard.label === "USD" ? (
          <Image source={usaFlag} style={styles.flagIcon} />
        ) : (
          <Image source={ukFlag} style={styles.flagIcon} />
        )}
        <Text style={styles.cardPickerText}>
          {selectedCard ? selectedCard.label : "Select Card"}
        </Text>
      </TouchableOpacity>
    );
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
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0,
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              flex: 1,
              marginRight: 10,
            },
          ]}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <CardOption />
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {cardItems.slice(0, 3).map((card) => (
              <TouchableOpacity
                key={card.value}
                style={styles.modalOption}
                onPress={() => handleCardSelect(card)}
              >
                {card.label === "INR" ? (
                  <Image source={indFlag} style={styles.flagIcon} />
                ) : card.label === "USD" ? (
                  <Image source={usaFlag} style={styles.flagIcon} />
                ) : (
                  <Image source={ukFlag} style={styles.flagIcon} />
                )}
                <Text style={styles.modalOptionText}>{card.label}</Text>
                <Text style={styles.modalAccoutText}> {card.number}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  flagIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 20,
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
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  currencyText: {
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
  },
  cardPickerText: { fontSize: 16, fontFamily: "SFProDisplayMedium" },
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
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalOption: {
    flexDirection: "row",
    // alignItems: "/",
    // justifyContent: "space-between",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    width: "100%",
  },
  modalOptionText: {
    fontSize: 18,
    fontFamily: "SFProDisplayMedium",
    marginHorizontal: 10,
  },
  modalAccoutText: {
    fontSize: 16,
    fontFamily: "SFProDisplayMedium",
    alignSelf: "flex-end",
    textAlign: "right",
    // width: "100%",
    flex: 1,
    paddingRight: 10,
  },
  modalCloseButton: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 35,
  },
  modalCloseButtonText: {
    color: "#FFF",
    fontSize: 18,
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
