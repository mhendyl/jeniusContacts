import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {TextComponent} from '../../components/text';
import {useDispatch, useSelector} from 'react-redux';
import {getAllContactThunk, setDisabledCreateNewContact} from '../../rtk/contact';
import {TextInputComponent} from '../../components/textInput';
import {RootState} from '../../rtk/rootReducer';
import {ContactInterface} from '../../rtk/contact/models/initialState';
import {getFirstLetter} from '../../utils';
import {ButtonComponent} from '../../components/button';

export type RenderContactTypes = {
  item: ContactInterface;
  index: number;
};

const HomeScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const {contact, createNewContact} = useSelector((state: RootState) => state.contactReducer);
  const [search, setSearch] = useState<string>('');
  const [dataContact, setDataContact] = useState<any>(contact);
  useEffect(() => {
    dispatch(getAllContactThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (createNewContact) {
      dispatch(getAllContactThunk());
      dispatch(setDisabledCreateNewContact());
    }
  }, [createNewContact, dispatch]);

  useEffect(() => {
    if (search) {
      const dataFilter = contact?.filter(
        (val: ContactInterface) =>
          val.firstName.toLowerCase().includes(search.toLowerCase()) ||
          val.lastName.toLowerCase().includes(search.toLowerCase()),
      );
      setDataContact(dataFilter);
    } else {
      setDataContact(contact);
    }
  }, [contact, search]);

  const handleOnPressDetailContact = (id: string) => {
    navigation.navigate('Details', {id});
  };

  const renderContact = ({item, index}: RenderContactTypes) => {
    const getInitial = getFirstLetter({
      firstName: item.firstName,
      lastName: item.lastName,
    });
    return (
      <TouchableOpacity
        key={index}
        style={styles.wrapperContactName}
        onPress={() => {
          handleOnPressDetailContact(item.id);
        }}>
        <View style={styles.wrapperInitialContactName}>
          <TextComponent
            label={getInitial}
            testId="label"
            styleContainerText={styles.initialContactName}
          />
        </View>
        <TextComponent
          label={`${item.firstName} ${item.lastName}`}
          testId="label"
          styleContainerText={styles.fullContactName}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextComponent
        testId="home"
        label="Contacts"
        styleContainerText={styles.titleHeader}
      />
      <TextInputComponent
        onChange={setSearch}
        placeholder="Search"
        value={search}
        testId="searchContact"
        label="Search"
        styleCustom={styles.inputSearcher}
        placeholderTextColor="#757575"
      />
      <ButtonComponent
        styleCustom={styles.buttonAddContact}
        styleTextCustom={styles.textAddContact}
        label="+ Create New"
        onPress={() => {
          navigation.navigate('CreateNewContact');
        }}
      />
      <View style={styles.containerFlatLists}>
        <FlatList
          data={dataContact}
          extraData={dataContact}
          renderItem={({item, index}) => renderContact({item, index})}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
