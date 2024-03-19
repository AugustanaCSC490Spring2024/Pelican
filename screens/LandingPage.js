import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as RootNavigation from '../RootNavigation';
import Onboarding from "./Onboarding";

export default function LandingPage(){
    const [showPage, setShowPage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPage(false);
            RootNavigation.navigate('Onboarding');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
        {showPage && (
            <>
            <Text style={styles.appName}>
                Campus {"\n"}
                Marketplace {"\n"}
                App
            </Text>
            </>
        )}
        </View>
    );
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
    appName: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 50
    }
});
