import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputSearcher: {
    borderWidth: 0,
    backgroundColor: '#d4d4d4',
    marginTop: 30,
  },
  containerFlatLists: {
    height: '75%',
    marginTop: 20,
  },
  buttonAddContact: {
    marginTop: 30,
    borderWidth: 0,
  },
  textAddContact: {
    textAlign: 'left',
  },
  wrapperContactName: {
    marginTop: 10,
    flexDirection: 'row',
  },
  wrapperInitialContactName: {
    padding: 10,
    backgroundColor: '#d4d4d4',
    borderRadius: 8,
  },
  initialContactName: {
    textTransform: 'uppercase',
  },
  fullContactName: {
    paddingVertical: 10,
    marginLeft: 10,
  },
});

export default styles;
