import {Text, StyleSheet} from 'react-native';

export const StyledText = ({text, fontSize, fontWeight, color})=>{
    return(
        <Text style={{fontSize, fontWeight, color}}>{text}</Text>
    );
}
