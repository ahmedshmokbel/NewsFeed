import React from "react";
import { View, TextInput, StyleSheet, Dimensions, I18nManager, TouchableOpacity } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const WIDTH = Dimensions.get('window').width;
import i18n from 'i18n-js'

interface Props {
    value: string,
    onChangeText: () => void,
    onClear: () => void
}

export const SearchBar:React.FC<Props> = (props) => {

    return (
        <View style={styles.searchSection}>
            <MaterialIcons style={styles.searchIcon} name="search" size={30} color={'black'} />
            <TextInput
                style={styles.input}
                placeholder={i18n.t('Search')}
                value={props.value}

                onChangeText={props.onChangeText}
                underlineColorAndroid="transparent"
                placeholderTextColor='grey'
            />

            <TouchableOpacity onPress={props.onClear}>

                <MaterialIcons name='close' onPress={props.onClear}
                    size={25} style={styles.inlineClose} color={'black'} />
            </TouchableOpacity>
        </View>


    )
}



const styles = StyleSheet.create({
    searchSection: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        //   backgroundColor: '#b40000',
        //position: "relative",
    },

    input: {
        flex: 1,
        height: 45, width: WIDTH,
        paddingVertical: 10,
        marginVertical: 8,
        paddingLeft: 35, left: 10,
        //  marginHorizontal: 5,
        //  backgroundColor: 'white',
        borderColor: 'grey', borderWidth: 0.5,
        color: '#424242', borderRadius: 4,
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    searchIcon: {
        position: 'absolute',
        zIndex: 99,
        left: 15,
        top: 6,
        justifyContent: 'center',
        alignItems: 'center', marginVertical: 10
    },
    inlineClose: {
        //  position: 'absolute',
        // zIndex: 99,
        right: 25,
        top: 10,
        marginVertical: 10
    },

});