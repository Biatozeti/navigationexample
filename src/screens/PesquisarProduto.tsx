import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";


interface Produto {
    id: number;
    nome: string;
    ingredientes: string;
    preco : string;
     imagem: string
}

function PesquisarProduto(): React.JSX.Element {

const navigation = useNavigation();

    const produtos: Produto [] = [
        {
            id: 1,
            nome: 'HotDog',
            ingredientes: 'Pão, batata, purê ...',
            preco: '10.99',
            imagem: require('../assets/images/hamburger.png')
        },
        {
            id: 2,
            nome: 'HotDog especial',
            ingredientes: 'Pão, batata, purê ...',
            preco: '29.99',
            imagem: require('../assets/images/hamburger.png')
        },
    ]
    const selecionaProduto = (produto: Produto)=> {
        navigation.navigate('EditarProduto', {produto});

    }

    const renderItem = ({ item}: {item: Produto}) => {
 return(
        <TouchableOpacity style={style.menuItem}
            onPress={()=> selecionaProduto(item)}>
            <Image source={require('../assets/images/hamburger.png')} 
            style={style.image}/>
        <View style={style.itemDetails} >
            <Text style={style.name}>{item.nome}</Text>
            <Text style={style.descripition}>{item.ingredientes}</Text>
            <Text style={style.price}>{item.preco}</Text>
            
        </View>
        </TouchableOpacity>
        )
    }
    return (
<View style={style.container}>
    <StatusBar  backgroundColor="red" barStyle="light-content"/>
    < Head />
    <FlatList 
    data={produtos}
    renderItem={renderItem}
    keyExtractor={(item) =>item.id ? item.id.toString(): Math.random().toString()}
    contentContainerStyle={style.menuList}
    />
    <Footer />


</View>

    );
    }
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop:10
    }, 
    image: {
        width: 80,
        height:80,
        resizeMode:'cover',
         borderRadius: 5
    },
    itemDetails: {
        marginLeft:10,
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descripition: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize:16,
        fontWeight: 'bold',
        marginTop: 5
    },
    menuList: {
        flexGrow: 1
    }
    
})

export default PesquisarProduto;