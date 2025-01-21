import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const profileStyles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        padding: 20,
        height: '100%'
    },

    header: {
        marginTop: 50,
        marginBottom:100,
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        width:'100%',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: colors.theme,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 5,
    },
    profileBio: {
        fontSize: 14,
        color: colors.blackVar1,
        textAlign: 'center',
        marginBottom:30,
    },


    avatarContainer: {
        alignSelf: 'center',
        marginBottom: 40,
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    avatarPlaceholder: {
        color: '#888',
        textAlign: 'center',
    },
})

export default profileStyles;
