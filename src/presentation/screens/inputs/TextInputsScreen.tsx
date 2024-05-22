import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { globalStyles } from "../../../config/theme/theme";
import Card from "../../components/ui/Card";

export const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView>
        <CustomView margin>
          <Title text="Text inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>
          <View
            style={{
              height: 10,
            }}
          />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <View
            style={{
              height: 50,
            }}
          />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </Card>
          <View
            style={{
              height: 50,
            }}
          />
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
