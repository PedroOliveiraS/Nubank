import {StyleSheet} from 'react-native';
import styled from 'styled-components';
// Atualizado
export const Container = styled.View`
    flex: 1;
    background-color: #8B10AE;
`;

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    justify-content: center;
`;

export const Card = styled.View`
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
    margin-horizontal: 20px;
    margin-vertical: 0;
`;

export const CardHeader = styled.View`
    flexDirection: row;
    justifyContent: space-between; 
    alignItems: center;
    padding: 30px
`;


export const CardContent = styled.View`
    flex: 1;
    padding-vertical: 0;
    padding-horizontal: 30px;
    justify-content: center;   
`;

export const CardFooter = styled.View`
    padding: 30px;
    background-color: #EEE;
    border-radius: 4px;
`;

export const Title = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;

export const Anottation = styled.Text`
    font-size: 13px;
    color: #333;
`;

