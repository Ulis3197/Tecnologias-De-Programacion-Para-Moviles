import React from "react";
import { View, Text } from "react-native";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContent from "../components/Login/LoginContent";

export default function Login() {
    return (
        <View>
            <LoginHeader></LoginHeader>
            <LoginContent></LoginContent>
        </View>
    );
}