import * as React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface ITextInputProps {
  imageUrl: ImageSourcePropType;
  placeholder?: string;
}

const TextInputWithImageIcon: React.FunctionComponent<ITextInputProps> = ({
  imageUrl,
  placeholder,
}) => {
  return (
    <View style={styles.textInputContainer}>
      <Image style={styles.textInputImageIcon} source={imageUrl} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || ''}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 56,
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  textInputImageIcon: {
    width: 24,
    height: 24,
    padding: 10,
  },

  input: {
    flex: 1,
    height: '100%',
    paddingRight: 10,
    paddingLeft: 0,
    marginHorizontal: 10,
    fontSize: 16,
    color: '#747688',
    lineHeight: 23,
  },
});
export default TextInputWithImageIcon;
