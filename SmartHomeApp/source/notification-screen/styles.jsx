import { StyleSheet } from "react-native";

export default StyleSheet.create({
    icon: {
        marginLeft: 0
    },
    container: {
        flex: 1,
        paddingTop: 8,
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
        borderBottomColor: "gray",
        borderWidth: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000',
        flex: 1,
    },
    item_content: {
        fontSize: 14,
        color: '#323232',
        flex: 1,
    },
    time: {
        fontSize: 10,
        color: '#9c9c9c',
        flex: 1,
    }
});
