import { StyleSheet } from "react-native";

export default StyleSheet.create({
    icon: {
        marginLeft: 0
    },
    container: {
        flex: 1,
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 25,
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 2,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
        borderTopColor: "#fff",
        borderBottomColor: "#D0CBCA",
        borderWidth: 3,
    },
    item_text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
