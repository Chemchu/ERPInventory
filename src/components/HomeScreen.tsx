import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ListView, StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

import { FlickService } from '../services/flick.service'
import { FlickModel } from "../models/flick.model";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    const flicks = FlickService.getFlicks()
    const cellFactory = (flick: FlickModel) => {
        return (
            <gridLayout
                height="280"
                borderRadius="10"
                className="bg-secondary"
                rows="*, auto, auto"
                columns="*"
                margin="5 10"
                padding="0"
            >
                <image row="0" margin="0" stretch="aspectFill" src={flick.image} />
                <label
                    row="1"
                    margin="10 10 0 10"
                    fontWeight="700"
                    className="text-primary"
                    fontSize="18"
                    text={flick.title}
                />
                <label
                    row="2"
                    margin="0 10 10 10"
                    className="text-secondary"
                    fontSize="14"
                    textWrap="true"
                    text={flick.description}
                />
            </gridLayout>
        )
        {/* <ListView
                items={flicks}
                cellFactory={cellFactory}
                separatorColor="transparent"
                height="100%"
            /> */}
    }

    return (
        <flexboxLayout style={styles.container}>
            <label
                className="osr"
                style={styles.text}
            >
                Hello World!!!!
            </label>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Tapped!")}
            >
                Tap me for an alert
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('Secondary', {})}
            >
                Go to next screen
            </button>
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