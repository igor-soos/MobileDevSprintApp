import AsyncStorage from "@react-native-async-storage/async-storage";

/*Salvar*/
export async function saveData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("Erro ao salvar:", error);
  }
}

/*Buscar*/
export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue != null
      ? JSON.parse(jsonValue)
      : null;
  } catch (error) {
    console.log("Erro ao buscar:", error);
  }
}

/*Remover*/
export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Erro ao remover:", error);
  }
}