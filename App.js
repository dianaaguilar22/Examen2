import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const listasCiudades = ["Zamora", "Jacona","Guadalajara","Morelia","Queretaro","CDMX","Monterrey"];
  const listaClientes = ["Cliente1", "Cliente2", "Cliente3", "Cliente4", "Cliente5","Cliente6", "Cliente7", "Cliente8", "Cliente9", "Cliente10","Cliente11", "Cliente12"];
  let numeroLista = 0;
  let encab = false
  l
  const clientesYciudades = (props) => {
    return (
      <View>
        <Text style={styles.clientesYciudades}>
          {props.nombre}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
    <Text >{"Ingresa El numero de lista"}</Text>
    <TextInput
        style={styles.disenhoCaja}
        onChangeText={(newText) => (numeroLista = newText)}
        placeholder={"Mostrar lista"}
      />
      <Button
        onPress={() => {
        
          }
        }
        title={"Ciudades"}
      />
      <Button
        onPress={() => {
        
          }
        }
        title={"Clientes"}
      />
      <Text>{"Lista Ciudades y Clientes"}</Text>
      <FlatList
       
        data={listasCiudades}
        renderItem={({ item }) => <Ciudades nombre={item.key} found={item.found} />}
      />
      <FlatList
       
       data={listaClientes}
       renderItem={({ item }) => <Clientes nombre={item.key} found={item.found} />}
     />
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  materias: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontStyle: "italic",
    color: "#25306b",
    borderWidth:1,
    borderRadius:10
  },scroll: {
    borderColor: "fffff",
    
    height: 400,
    width: 300,
  },disenhoCaja: {
    margin: 10,
    fontSize: 18,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  }
});
