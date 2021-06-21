import { StyleSheet } from "react-native";

export default StyleSheet.create({
    icon: {
        marginLeft: 0
    },
    list: {
        flex: 1,
        paddingTop: 8,
        backgroundColor: '#fff',
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
        borderLeftColor: "#E7E2E1",
        borderRightColor: "#E7E2E1",
        borderTopColor: "#E7E2E1",
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
        // flexWrap: 'wrap',
    },
    time: {
        fontSize: 10,
        color: '#9c9c9c',
        flex: 1,
    },
    deleteButton: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'red',
        right: 0,
        marginVertical: 2,
        marginHorizontal: 10,
        borderLeftColor: "#E7E2E1",
        borderRightColor: "#E7E2E1",
        borderTopColor: "#E7E2E1",
        borderBottomColor: "#E7E2E1",
        borderWidth: 3,
    },
    mark_as_readButton: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'gray',
        right: 75,
        marginVertical: 2,
        marginHorizontal: 10,
        borderLeftColor: "#E7E2E1",
        borderRightColor: "#E7E2E1",
        borderTopColor: "#E7E2E1",
        borderBottomColor: "#E7E2E1",
        borderWidth: 3,
    },
    interactiveIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
    },
    hiddenItems: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    mark_button: {
        flex: 1
    }   
});
