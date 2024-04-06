import React, {useState} from 'react';
import styles from './style';
import {TextComponent} from '../../components/text';
import {Image, View} from 'react-native';
import {ButtonComponent} from '../../components/button';
import {TextInputComponent} from '../../components/textInput';
import {RootState} from '../../rtk/rootReducer';
import {useSelector} from 'react-redux';
import {isImageHttpOrBase64, getFirstLetter} from '../../utils';

const EditScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {id} = route.params;
  const {contactDetails} = useSelector(
    (state: RootState) => state.contactReducer,
  );
  const [firstName, setFirstName] = useState(contactDetails.firstName);
  const [lastName, setLastName] = useState(contactDetails.lastName);
  const [age, setAge] = useState(contactDetails.age);
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

  const handleSave = () => {
    console.log('>>> save');
  };

  return (
    <View style={styles.container}>
      {header()}
      <View style={styles.bodyContainer}>
        {isImageHttpOrBase64(contactDetails?.photo) ? (
          <Image
            style={styles.imageProfile}
            source={{
              uri: contactDetails?.photo,
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

export default EditScreen;
