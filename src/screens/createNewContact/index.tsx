import React, {useState} from 'react';
import styles from './style';
import {Image, View} from 'react-native';
import {ButtonComponent} from '../../components/button';
import {TextInputComponent} from '../../components/textInput';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {createContactNewThunk} from '../../rtk/contact';

const CreateNewContact = ({navigation}: {navigation: any}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [response, setResponse] = React.useState<any>('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const header = () => {
    return (
      <View style={styles.wrapperHeader}>
        <ButtonComponent
          label="Back"
          onPress={() => {
            navigation.goBack();
          }}
          styleTextCustom={styles.textButtonHeader}
          styleCustom={styles.buttonHeader}
        />
      </View>
    );
  };

  const handleSave = async () => {
    const body = {
      photo: `data:image/png;base64,${response?.assets[0].base64}`,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    await dispatch(createContactNewThunk(body));
    navigation.goBack();
  };

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'photo', includeBase64: true, maxHeight: 100, maxWidth: 100},
      setResponse,
    );
  };

  return (
    <View style={styles.container}>
      {header()}
      <View style={styles.bodyContainer}>
        <View style={styles.wrapperInputText}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: response
                ? `data:image/png;base64,${response?.assets[0].base64}`
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
            }}
          />
          <ButtonComponent
            label="Select Photos"
            onPress={selectImage}
            styleCustom={styles.buttonSelectPicture}
            styleTextCustom={styles.buttonTextSelectPicture}
          />
          <TextInputComponent
            styleCustom={styles.inputText}
            placeholder="First Name"
            onChange={setFirstName}
            value={firstName}
            testId="firstName"
            label="firstName"
            placeholderTextColor="#828282"
          />
          <TextInputComponent
            styleCustom={styles.inputTextSecond}
            placeholder="Last Name"
            onChange={setLastName}
            value={lastName}
            testId="firstName"
            label="firstName"
            placeholderTextColor="#828282"
          />
          <TextInputComponent
            styleCustom={styles.inputTextSecond}
            placeholder="Age"
            onChange={setAge}
            value={age}
            placeholderTextColor="#828282"
            testId="firstName"
            label="firstName"
          />
        </View>
        <ButtonComponent
          label="Save"
          onPress={() => {
            handleSave();
          }}
          styleCustom={styles.saveButton}
          styleTextCustom={styles.textButtonSave}
        />
      </View>
    </View>
  );
};

export default CreateNewContact;
