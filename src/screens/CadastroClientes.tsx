import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios'; 

const CadastroCliente: React.FC = () => {
      const [cliente, setCliente] = useState<string[]>([]);
      const [nome, setNome] = useState<string>('');
      const [endereco, setEndereco] = useState<string>('');
      const [telefone, setTelefone] = useState<string>('');
      const [email, setEmail] = useState<string>('');
      const [cpf, setCpf] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const [imagem, setImagem] = useState<any>('');
      
     
     
      const cadastrarCliente = async () => {
        try {

            
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('endereco', endereco);
        formData.append('telefone', telefone);
        formData.append('email', email);
        formData.append('cpf', cpf);
        formData.append('password', password);
        formData.append('imagem', {
            uri: imagem,
            type: 'image/jpeg',
            name: new Date() + '.jpg'
        });
    
console.log(formData)
        const response = await axios.post('http://10.137.11.215:8000/api/cliente', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
         });
console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }
      const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeigth: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            } else if(response.error){
                console.log('erro ao abrir a câmera');
            } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImagem(imageUri);
            console.log(imageUri);
            }
        });

   
      }

      const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxheight: 2000,
            maxwhidth: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            } else if(response.error){
                console.log('erro ao abrir a galeria');
            } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImagem(imageUri);
            }
        });
      }
    return (
        <View style={styles.container}>
          
            <View style={styles.header}>
                <Text style= {styles.headerText}>cadastro de clientes</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome} />
                <TextInput
                style={styles.input}
                placeholder="Endereço"
                value={endereco}
                onChangeText={setEndereco} />
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                multiline />
                 <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf} />
                 <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone} />
                 <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword} />
            <View style={styles.alinhamentoImagemSelecionada}>
                {imagem ? <Image source={{uri: imagem}} style={styles.imagemSelecionada} /> : null} 
                </View>    
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imagemButtomText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imagemButtomText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar Cliente</Text>
                </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#00FF7F',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: '#00FF7F',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imagemButtomText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#00FF7F',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    

});

export default CadastroCliente;


































































































































































































