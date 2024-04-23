import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Item {

    id: string;
    nome: string;
    ingredientes: string;
    valor: string;
    image: any;
}


const dados: Item[] = [
    { id: "1", nome: "pizza de civetta", ingredientes: "alho, calabresa picada e queijo", valor: "R$55", image: require('./assets/imagens/comida7.png') },
    { id: "2", nome: "pizza de catufrango", ingredientes: "frango, catupiry e tomate", valor: "R$50", image: require('./assets/imagens/comida.png') },
    { id: "3", nome: "pizza de epitaciana", ingredientes: "lombo, tomate, bacon e queijo", valor: "R$60", image: require('./assets/imagens/comida1.png') },
    { id: "4", nome: "pizza de calabresa", ingredientes: "tomate, calabresa e queijo", valor: "R$55", image: require('./assets/imagens/comida2.png') },
    { id: "5", nome: "pizza de lombo com catupiry", ingredientes: "catupity, lombo, queijo e tomate", valor: "R$55", image: require('./assets/imagens/comida4.png') },
    { id: "6", nome: "pizza do amor", ingredientes: "chocolate, morango e leite em pó", valor: "R$55", image: require('./assets/imagens/comida5.png') },
    { id: "7", nome: "pizza de duplo queijo", ingredientes: "molho de tomate e muito queijo", valor: "R$50", image: require('./assets/imagens/comida6.png') },
    { id: "8", nome: "cerveja heineken", ingredientes: "500ml de heineken", valor: "R$7", image: require('./assets/imagens/bebida1.png') },
    { id: "9", nome: "cerveja de brahma", ingredientes: "500 ml de brahma", valor: "R$3,50", image: require('./assets/imagens/bebida2.png') },
    { id: "10", nome: "coca lata", ingredientes: "500 ml de coca-cola", valor: "R$4,50", image: require('./assets/imagens/bebida3.png') },
    { id: "11", nome: "garrafinha de água", ingredientes: "500 ml de água", valor: "R$2", image: require('./assets/imagens/bebida4.png') },
    { id: "12", nome: "guaraná lata", ingredientes: "500ml de guaraná", valor: "R$4", image: require('./assets/imagens/bebida5.png') },
    { id: "13", nome: "skol lata", ingredientes: "500 ml de skol", valor: "R$4,50", image: require('./assets/imagens/bebida6.png') },
    { id: "14", nome: "suco de abacaxi", ingredientes: "500 ml de suco de abacaxi", valor: "R$8", image: require('./assets/imagens/bebida7.png') },
    { id: "15", nome: "suco de laranja", ingredientes: "500 ml de suco de laranja", valor: "R$10", image: require('./assets/imagens/bebida8.png') },

];


const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <Text style={styles.text}>{item.ingredientes}</Text> 
        <Text style={styles.textPreco}>{item.valor}</Text>
        <Image source={item.image} style={styles.imagens} />
    </TouchableOpacity>
)



function cardapio(): React.JSX.Element {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>

<Image source={require('./assets/imagens/logo.png')}  style={styles.logo} />  


          

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />

            <View style={styles.footer}>

                <TouchableOpacity>
                    <Image source={require('./assets/imagens/pedidos.png')} style={styles.footerIcon} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('PesquisaProdutos')}>
                    <Image source={require('./assets/imagens/perfil.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CadastroProduto')}>
                    <Image source={require('./assets/imagens/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/imagens/menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

//css
const styles = StyleSheet.create({
 container: {
    flex:1,
    backgroundColor: '#000000'
 },
    item: {
        padding: 20,
        backgroundColor: '#9d0208',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 33
    },
    imagens: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginLeft: 150

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {

        width: 30,
        height: 30
    },
    logo:{
        width: 400,
        height: 290,
        
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    textPreco: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 250,
         },
         



});


export default cardapio;