import * as React from 'react';
import {Pressable, StyleSheet, TextInput, View, Text} from 'react-native';

interface IOTPInputProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  maximumLength: number;
  setIsPinReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const OTPInput: React.FunctionComponent<IOTPInputProps> = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}) => {
  const [isInputBoxFocused, setIsInputBoxFocused] = React.useState(false);
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = React.createRef<TextInput>();

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_: any, index: number) => {
    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const emptyInput = '';
    const digit = code[index] || emptyInput;

    return (
      <View
        key={index}
        style={
          isInputBoxFocused && isValueFocused
            ? styles.splitBoxes
            : styles.SplitBoxesFocused
        }>
        <Text>{digit}</Text>
      </View>
    );
  };

  return (
    <View>
      <Pressable style={styles.splitOTPBoxesContainer}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.textInputHidden}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputHidden: {
    width: 300,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    position: 'absolute',
    //opacity: 0,
  },
  splitOTPBoxesContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  splitBoxes: {
    borderColor: '#e5e5e5',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
  },
  SplitBoxesFocused: {
    borderColor: '#ecdbba',
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    minWidth: 50,
  },
  splitBoxText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
});

export default OTPInput;
