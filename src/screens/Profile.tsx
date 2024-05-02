import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";

function Profile(): React.JSX.Element {
    return (
        <View>
            <Head/>
            <Text>Tela de perfil </Text>
            <Footer/>
        </View>
    );
}

export default Profile;