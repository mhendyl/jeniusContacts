import React, { useEffect } from 'react';
import styles from './style';
import {TextComponent} from '../../components/text';
import {ActivityIndicator, Alert, Image, View} from 'react-native';
import {ButtonComponent} from '../../components/button';
// import {getContactDetailsThunk} from '../../rtk/contact';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../rtk/rootReducer';
import {getFirstLetter, isImageHttpOrBase64} from '../../utils';
import {
  deleteContactDetailsThunk,
  getContactDetailsThunk,
  setEnabledCreateNewContact,
} from '../../rtk/contact';

const DetailsContact = ({route, navigation}: {route: any; navigation: any}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const {contactDetails, isLoading, editContact} = useSelector(
    (state: RootState) => state.contactReducer,
  );

  useEffect(() => {
    if (editContact) {
      dispatch(getContactDetailsThunk(id));
    }
  }, [dispatch, editContact, id]);

  const deleteContact = () => {
    dispatch(deleteContactDetailsThunk(id));
    dispatch(setEnabledCreateNewContact());
    navigation.goBack();
  };

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
        <ButtonComponent
          label="Edit"
          onPress={() => {
            navigation.navigate('Edit', {id});
          }}
          styleTextCustom={styles.textButtonHeader}
          styleCustom={styles.buttonHeader}
        />
      </View>
    );
  };

  return (
    <>
      {isLoading && !contactDetails ? (
        <View style={styles.wrapperLoader}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
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
            </View>
          </View>
          <View style={styles.containerDetails}>
            <View style={styles.wrapperDetails}>
              <TextComponent
                label={`Full Name: ${contactDetails.firstName} ${contactDetails.lastName}`}
                testId="fullName"
                styleContainerText={styles.textDetails}
              />
            </View>
            <View style={styles.wrapperDetails}>
              <TextComponent
                label={`Age: ${contactDetails.age}`}
                testId="age"
                styleContainerText={styles.textDetails}
              />
            </View>
            <ButtonComponent
              label="Delete"
              styleCustom={styles.deleteButton}
              styleTextCustom={styles.textButtonDelete}
              onPress={() => {
                deleteContact();
              }}
            />
          </View>
        </>
      )}
    </>
  );
};

export default DetailsContact;
