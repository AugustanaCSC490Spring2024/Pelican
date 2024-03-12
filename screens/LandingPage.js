import { TouchableOpacity, Button, Alert, StyleSheet, Text, View } from "react-native/types";

export default function LandingPage({ navigation }) {
    return (
        <View style={ styles.contatiner }>
            <Text style={ styles.name }>
                Campus {"\n"}
                Marketplace {"\n"}
                App
            </Text>
            <Button style={styles.btn} onPress={ () => navigation.navigate("OB1") }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    name: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 50
    },
    btn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn1: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white'
    }
})