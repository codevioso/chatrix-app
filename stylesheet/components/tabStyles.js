import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const tabStyles = StyleSheet.create({
    tabBarStyle: {
        height: 57, // Custom height
        borderRadius: 16, // Rounded corners
        marginBottom: 20, // Margin at the bottom
        marginHorizontal: 20, // Side margins
        backgroundColor: colors.white, // Background color
        display: 'flex',
        justifyContent: 'space-around', // Space evenly between icons
        alignItems: 'center', // Center vertically

        // Shadow styles
        shadowColor: '#323247',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 20,
        elevation: 1,
        borderWidth:10,
    }
})
export default tabStyles;
