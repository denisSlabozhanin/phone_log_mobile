import { AsyncStorage } from 'react-native';
import { NAMESPACE } from '../constants/storage';

const storage = {
  get: async key => {
    try {
      const value = await AsyncStorage.getItem(`${NAMESPACE}:${key}`);
      if (value === null) {
        throw new Error(`Storage key ${key} not found`);
      }
      return value;
    } catch (err) {
      return err;
    }
  },
  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(`${NAMESPACE}:${key}`, value);
      return true;
    } catch (err) {
      return err;
    }
  },
  remove: async key => {
    try {
      await AsyncStorage.removeItem(`${NAMESPACE}:${key}`);
      return true;
    } catch (err) {
      return err;
    }
  },
};

export default storage;
