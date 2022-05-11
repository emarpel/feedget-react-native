import { ArrowArcLeft } from 'phosphor-react-native';
import React from 'react';

import { 
    View, 
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { FeedbackType } from '../../components/Widget';

import { theme } from '../../theme';
import { styles } from './styles';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../../components/ScreenshotButton';

interface Props {
    feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <ArrowArcLeft
                    size={24}
                    weight="bold"
                    color={theme.colors.text_secondary}
                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image
                    source={feedbackTypeInfo.image}
                    style={styles.image} 
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>
        </View>

        <TextInput
            multiline
            style={styles.input}
            placeholder="Deixe com detalhes o seu feedback."
            placeholderTextColor={theme.colors.text_secondary}
        />

        <View style={styles.footer}>
            <ScreenshotButton
                onTakeShot={() => {}}
                onRemoveShot={() => {}}
                screenshot=""
            />
        </View>

    </View>
  );
}