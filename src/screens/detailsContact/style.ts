import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapperLoader: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 60,
    backgroundColor: '#cfd1d0',
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
    height: '50%',
    backgroundColor: '#cfd1d0',
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
  wrapperIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 20,
  },
  buttonIcon: {
    backgroundColor: '#969997',
    padding: 10,
    borderRadius: 10,
  },
  containerDetails: {
    paddingHorizontal: 20,
    height: '50%',
    backgroundColor: '#232423',
    flexDirection: 'column',
  },
  wrapperDetails: {
    backgroundColor: '#4d4d4d',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  textDetails: {
    color: '#FFFFFF',
  },
  textButtonDelete: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#802424',
    padding: 15,
    marginTop: 40,
    borderWidth: 0,
  },
});

export default styles;
