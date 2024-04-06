import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapperLoader: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 60,
    backgroundColor: '#4d4d4d',
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonHeader: {
    borderWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignContent: 'flex-start',
    backgroundColor: '#acadac',
  },
  textButtonHeader: {
    color: '#ebf0ec',
  },
  bodyContainer: {
    marginTop: 10,
    height: '100%',
    backgroundColor: '#4d4d4d',
    flexDirection: 'column',
  },
  imageProfile: {
    borderRadius: 100,
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 80,
    justifyContent: 'center',
  },
  wrapperTextProfile: {
    backgroundColor: '#969997',
    alignSelf: 'center',
    marginTop: 80,
    padding: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textProfile: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textFullName: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    marginTop: 30,
    fontWeight: 'bold',
  },
  wrapperInputText: {
    marginTop: 30,
  },
  inputText: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#c4c4c4',
    borderRadius: 0,
    color: '#fff',
    paddingHorizontal: 20,
  },
  inputTextSecond: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#c4c4c4',
    borderRadius: 0,
    paddingHorizontal: 20,
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#19540d',
    padding: 15,
    marginTop: 40,
    borderWidth: 0,
    marginHorizontal: 10,
  },
  textButtonSave: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default styles;
