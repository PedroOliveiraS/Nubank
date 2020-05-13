import React from 'react';
// Atualizado
import {View, Text} from 'react-native';

import {styles, Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, 
    Anottation} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Icon from '@expo/vector-icons/MaterialIcons'


export default function Main(){

    return(
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666"/>
                        <Icon name="visibility-off" size={28} color="#666"/>
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo Disponível</Title>
                        <Description>R$: 160.684,95</Description>
                    </CardContent>
                    <CardFooter>
                        <Anottation>Transferência de R$50,00 recebida de Lucas Moura hoje às 09:00h</Anottation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs/>
        </Container> 
    )
}