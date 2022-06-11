import React from 'react'
import {View, Text} from 'react-native'
import style from './style'

const Card = ({titulo, children}) => {
    return(
        <View style={style.card_container}>
          <View style={style.card}>
            <Text>{titulo}</Text>
            <View style={style.card_header}></View>
            <View style={style.card_content}>
                {children}
            </View>
          </View>
        </View>
    )
}

export default Card