import React from 'react';
import {styles, Container, Top, LogoStyle, Title} from './styles'
import {View, Text, Image} from 'react-native';
//Atualizado

import Logo from "../../../assets/Nubank_Logo.png";
import Icon from '@expo/vector-icons/MaterialIcons'
export default function Header(){
    return(
        <Container>
            <Top>
                <LogoStyle source={Logo}/>
                <Title> Marsh </Title>
            </Top>
            <Icon name='keyboard-arrow-down' size={20} color="#FFF" />
        </Container>
    )
}