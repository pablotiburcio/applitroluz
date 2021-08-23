import React from 'react';
import { FlatList, View } from 'react-native';
import SmallCardButton from '../../components/SmallCardButton';
import styles from './styles';

import { useGuide } from '../../contexts/guide';
import { useNavigation } from '@react-navigation/native';

function SelectGuide() {
  const { procedures, setGuide } = useGuide();
  const navigation = useNavigation();

  function setGuideAndChangeScreen(guideId: number) {
    setGuide(guideId);
    navigation.navigate("SelectStep");
  }

  return(
    <View style={styles.container}>
      <FlatList 
        data={procedures}
        numColumns={2}
        contentContainerStyle={styles.containerList}
        renderItem={({ item, index }) => 
          <SmallCardButton 
            id={index}
            title={item.title} 
            onPress={setGuideAndChangeScreen} 
          />
        }
      />
    </View>
  );
}

export default SelectGuide;