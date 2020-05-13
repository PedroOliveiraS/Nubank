import {StyleSheet} from 'react-native'
import styled from 'styled-components';
// Atualizado

export const ContainerContent = styled.View`
   height: 100px;
   margin-Top: 20px;
`;

export const TabItem = styled.View`
   width: 100px;
   background-color: rgba(255,255,255,0.2);
   border-radius: 3px;
   margin-left: 10px;
   padding: 10px;
   justify-content: space-between;
   height: 100px;
`;
export const TabText = styled.Text`
   font-size: 13px;
   color: #fff;
`;

export const styles = StyleSheet.create({
     tabsContainer: {
        paddingLeft: 10,
        paddingRight: 20,
     },
});