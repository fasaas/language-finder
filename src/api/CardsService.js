import AsyncStorage from "@react-native-community/async-storage";
const storageKey = 'language-finder-notes';

const getLanguageCards = async () => {
  try {
    const value = await AsyncStorage.getItem(storageKey)
    return JSON.parse(value);
  } catch (e) {
    // error reading value
    console.error(e);
  }
};

const setLanguageCards = async (data) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(data), (error) => {
      if (error) console.error(error)
      else console.log("Written OK")
    })

  } catch (e) {
    // error reading value
    console.error(e);
  }
}

export { getLanguageCards, setLanguageCards };
