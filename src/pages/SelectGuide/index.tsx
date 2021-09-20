import React from 'react';
import styles from './styles';

import { View, FlatList, Text } from 'react-native';
import { SmallCardButton } from '../../components/SmallCardButton';

import { useGuide } from '../../contexts/guide';
import { useNavigation } from '@react-navigation/native';

function SelectGuide() {
  const { procedures, setGuide } = useGuide();
  const navigation = useNavigation();

  function setGuideAndChangeScreen(guideId: number) {
    setGuide(guideId);
    navigation.navigate("SelectStep");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FlatList
          data={procedures}
          numColumns={2}
          renderItem={({ item, index }) => 
            <SmallCardButton
              idImage={index}
              title={item.title}
              onPress={() => setGuideAndChangeScreen(index)}
            />
          }
        />
      </View>
    </View>
  );
}

export default SelectGuide;