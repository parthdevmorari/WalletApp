import React from 'react';
import {View, Text} from 'react-native';
import styles from './InputFieldStyles';
import {TextInput} from '@Component';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';

export const InputField = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [icon, setIcon] = React.useState('eye-with-line');

  const {
    title,
    mainContainerStyle,
    multiline,
    inputContainerStyle,
    titleStyle,
    value,
    iconStyle,
    textFieldStyle,
    placeholder,
    onChangeText,
    keyboardType,
    readOnly,
    onFocus,
    onRef,
    secureTextEntry,
    error,
    onBlur,
    disable,
    length,
    iconContainerStyle
  } = props;
  React.useEffect(() => {
    if (secureTextEntry) {
      setIsVisible(true);
    }
  }, [secureTextEntry]);
  const _changeIcon = () => {
    setIcon(icon === 'eye' ? 'eye-with-line' : 'eye');
    setIsVisible(!isVisible);
  };
  return (
    <View style={[styles.inputBoxContainer, mainContainerStyle]}>
      {title && (
        <Text style={[styles.inputLableTaxt, titleStyle]}>{title}</Text>
      )}
      <View style={[styles.InputRow, inputContainerStyle]}>
	  {props.leftIcon && (
          <View style={[styles.leftIcon, iconContainerStyle]}>
            <Icon size={20} name={props.leftIcon} onPress={() => _changeIcon()}  style={[styles.icon,iconStyle]}/>
          </View>
        )}
         {props.leftIcon2 && (
          <View style={[styles.leftIcon, iconContainerStyle]}>
            <Icon2 size={20} name={props.leftIcon2} onPress={() => _changeIcon()}  style={[styles.icon ,iconStyle]}/>
          </View>
        )}
        <View
          style={{
            width:( props.secureTextEntry )? '90%' : '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
			  
          <TextInput
            textFieldStyle={[styles.inputContainer, textFieldStyle]}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            onFocus={() => {
              if (onFocus !== undefined) {
                onFocus();
              }
            }}
            onBlur={() => {
              if (onBlur !== undefined) {
                onBlur();
              }
            }}
            length={length}
            error={error}
            secureTextEntry={isVisible ? true : false}
            onRef={onRef}
            editable={readOnly ? false : true}
            keyboardType={keyboardType}
            disable={disable}
            multiline={multiline}
          />
        </View>

        {props.secureTextEntry && props.isRight && (
          <View style={[styles.iconRowpass, iconStyle]}>
            <Icon size={20} name={icon} onPress={() => _changeIcon()} />
          </View>
        )}
      </View>
    </View>
  );
};

export default InputField;
