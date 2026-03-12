import React from 'react';

import { View, StyleSheet, ColorPropType } from 'react-native';

import { styles } from './styles';

type props = {
    lineColor: ColorPropType
    sideSpace?: number

};

export const Line = (props:props) => {
    const lineColor = props.lineColor
    return (
        <View
        style={[styles.line, {backgroundColor: lineColor, marginHorizontal: props.sideSpace}]}
        />
    )
}

