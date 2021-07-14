import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  fundo: {
    flex: 1,
    width: '100%'
  },

  text: {
    width: 250,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },

  form: {
    backgroundColor: '#FFC0CB',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#A0522D',
    marginBottom: 15,
    width: 300,
    height: 50,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
  },

  button: {
    width: '73%',
    height: 50,
    backgroundColor: '#F2B6BB',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A0522D',
  },

  title: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
  }
})