import React from 'react';
import {
    View,

    Linking,
    Text
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {

}
export const FeedBackButton = ({ }: Props) => {
    function goLinkFeedback() {
        Linking.openURL("https://forms.gle/Zoqu6CK3kmmDgMvM7");
    }
    return (
        <TouchableOpacity
            onPress={goLinkFeedback}
            style={styles.container}
        >
            <EvilIcons name="star" size={24} color="white" />
            <Text style={styles.text}>Feedback</Text>
        </TouchableOpacity>
    );
}