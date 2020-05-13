import React from 'react';
import {styles, ContainerContent, TabItem, TabText} from './styles'
import {View, Text, ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'

export default function Tabs(){
    return (
        <ContainerContent>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabContainer}
            >
                <TabItem> 
                    <Icon name='person-add' size={24} color='#FFF'/>
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='chat-bubble-outline' size={24} color='#FFF'/>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='arrow-downward' size={24} color='#FFF'/>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='arrow-upward' size={24} color='#FFF'/>
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name='lock' size={24} color='#FFF'/>
                    <TabText>Bloquear Cartão</TabText>
                </TabItem>
            </ScrollView>
        </ContainerContent>
    );
}