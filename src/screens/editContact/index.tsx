import React, {useState} from 'react';
import styles from './style';
import {TextComponent} from '../../components/text';
import {Image, View} from 'react-native';
import {ButtonComponent} from '../../components/button';
import {TextInputComponent} from '../../components/textInput';
import {RootState} from '../../rtk/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {isImageHttpOrBase64, getFirstLetter} from '../../utils';
import * as ImagePicker from 'react-native-image-picker';
import {editContactNewThunk} from '../../rtk/contact';

const EditScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const {contactDetails} = useSelector(
    (state: RootState) => state.contactReducer,
  );
  const [firstName, setFirstName] = useState(contactDetails.firstName);
  const [lastName, setLastName] = useState(contactDetails.lastName);
  const [ageState, setAgeState] = useState(contactDetails.age.toString());
  const [response, setResponse] = React.useState<any>('');

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

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'photo', includeBase64: true, maxHeight: 100, maxWidth: 100},
      setResponse,
    );
  };

  const handleSave = () => {
    const value = {
      firstName: firstName,
      lastName: lastName,
      // eslint-disable-next-line radix
      age: parseInt(ageState),
      photo: `data:image/png;base64,${response?.assets[0].base64}`,
    };
    dispatch(editContactNewThunk({params: value, id: id}));
  };

  return (
    <View style={styles.container}>
      {header()}
      <View style={styles.bodyContainer}>
        {isImageHttpOrBase64(contactDetails?.photo) || response ? (
          <Image
            style={styles.imageProfile}
            source={{
              uri: response
                ? `data:image/png;base64,${response?.assets[0].base64}`
                : contactDetails?.photo,
            }}
          />
        ) : (
          <View style={styles.wrapperTextProfile}>
            <TextComponent
              label={getFirstLetter({
                firstName: contactDetails.firstName,
                lastName: contactDetails.lastName,
              })}
              testId="initial"
              styleContainerText={styles.textProfile}
            />
          </View>
        )}
        <ButtonComponent
          label="Select Photos"
          onPress={selectImage}
          styleCustom={styles.buttonSelectPicture}
          styleTextCustom={styles.buttonTextSelectPicture}
        />
        <TextComponent
          label={`${contactDetails.firstName} ${contactDetails.lastName}`}
          testId="fullName"
          styleContainerText={styles.textFullName}
        />
        <View style={styles.wrapperInputText}>
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
            testId="lastName"
            label="lastName"
            placeholderTextColor="#828282"
          />
          <TextInputComponent
            styleCustom={styles.inputTextSecond}
            placeholder="Age"
            onChange={setAgeState}
            value={ageState}
            placeholderTextColor="#828282"
            testId="age"
            label="age"
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

export default EditScreen;
