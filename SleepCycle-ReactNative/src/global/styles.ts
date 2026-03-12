import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "80%",
      backgroundColor: themes.color.background,
      alignItems: 'center',
      paddingTop: "10%",
      paddingBottom: "20%",
    },
    title:{
      fontSize: 20,
      fontWeight: '600',
      color: themes.color.text,
      marginBottom: 24,
    },
    appBox:{
      width: '85%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',

    },
    h2: {
      color: themes.color.text,
      fontSize: 15,
      fontWeight: '600',
    },
    text:{
      color: themes.color.text,
      fontSize: 10,
      fontWeight: '400',
    },
    optionsBox:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    },
    option:{
      borderColor: themes.color.highlight,
      borderWidth: 1,
      borderRadius: 4,
      padding: 6,
    },
    optionSelected:{
      backgroundColor: themes.color.highlight,
      borderColor: themes.color.highlight,
      borderWidth: 1,
      borderRadius: 4,
      padding: 6,
    },
    resultsBox:{
      height: "60%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignContent: "space-evenly",
    },
    result:{
      backgroundColor: themes.color.highlight,
      width: "40%",
      height: "25%",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    hour:{
      color: themes.color.text,
      fontSize: 30,
      fontWeight: '600',
    },
  });