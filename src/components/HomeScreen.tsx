import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ListView, StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

import { InventarioService } from "../services/inventario.service";
import { InventarioModel } from "../models/inventario.model";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    const inventarios = InventarioService.getInventarios()
    const cellFactory = (inventario: InventarioModel) => {
        return (
            <gridLayout
                height="280"
                borderRadius="10"
                className="bg-secondary"
                rows="*, auto, auto"
                columns="*"
                margin="5 10"
                padding="2rem"
            >
                {/* <image row="0" margin="0" stretch="aspectFill" src={inventario.image} /> */}
                <label
                    row="1"
                    margin="10 10 0 10"
                    fontWeight="600"
                    className="text-primary"
                    fontSize="18"
                    text={new Date(Number(inventario.createdAt)).toLocaleDateString()}
                />
                <label
                    row="2"
                    margin="0 10 10 10"
                    className="text-secondary"
                    fontSize="14"
                    textWrap="true"
                    text={`Por ${inventario.empleado.nombre} (${inventario.empleado.dni})`}
                />
            </gridLayout>
        )

    }

    return (
        <flexboxLayout style={styles.container}>
            <ListView
                items={inventarios}
                cellFactory={cellFactory}
                separatorColor="transparent"
                height="100%"
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});