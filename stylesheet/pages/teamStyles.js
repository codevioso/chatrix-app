import { StyleSheet } from 'react-native';
import colors from "../../constants/colors";

const teamStyles = StyleSheet.create({
    chatListContainer: {
        padding: 10,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical:15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    chatAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    chatAvatarText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
    chatInfo: {
        flex: 1,
    },
    chatSenderName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    chatMessagePreview: {
        fontSize: 14,
        color: '#555',
    },
    chatTimestamp: {
        fontSize: 12,
        color: '#888',
    },
    leftAction: {
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        flex: 1,
    },
    rightAction: {
        backgroundColor: colors.theme,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        flex: 1,
    },
    actionText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default teamStyles;
