import {
    View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, Pressable, FlatList
} from "react-native";
import stylesheet from "../../../stylesheet/stylesheet";
import React, {useState} from "react";
import images from "../../../constants/images";
import PrimaryButton from "../../../components/PrimaryButton";
import teamStyles from "../../../stylesheet/pages/teamStyles";
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

function TeamScreen(props) {
    const [formData, setFormData] = useState({
        searchParam: '',
    });
    const [focusedInput, setFocusedInput] = useState(null);

    const [chatData, setChatData] = useState([
        {id: '1', senderName: 'Alice', message: 'Hello! How are you?', time: '10:30 AM'},
        {id: '2', senderName: 'Bob', message: 'Let’s catch up tomorrow.', time: '09:15 AM'},
        {id: '3', senderName: 'Charlie', message: 'Meeting at 3 PM.', time: 'Yesterday'},
    ]);

    console.log("Chat Data:", chatData);


    // Delete handler
    const handleDelete = (id) => {
        setChatData((prev) => prev.filter((chat) => chat.id !== id));
    };

    const handleInputChange = (key, value) => {
        setFormData({...formData, [key]: value});
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    // Render left action (Delete)
    const renderLeftActions = (id) => (<TouchableOpacity onPress={() => handleDelete(id)}>
            <View style={teamStyles.leftAction}>
                <Text style={teamStyles.actionText}>Delete</Text>
            </View>
        </TouchableOpacity>);

    // Render right action (Edit)
    const renderRightActions = () => (<View style={teamStyles.rightAction}>
            <Text style={teamStyles.actionText}>Edit</Text>
        </View>);

    // Render individual chat item
    const renderItem = ({item}) => (<Swipeable
            renderLeftActions={() => renderLeftActions(item.id)}
            renderRightActions={renderRightActions}
        >
            <View style={teamStyles.chatItem}>
                {/* Avatar */}
                <View style={teamStyles.chatAvatar}>
                    <Text style={teamStyles.chatAvatarText}>
                        {item.senderName[0]}
                    </Text>
                </View>

                {/* Chat Info */}
                <View style={teamStyles.chatInfo}>
                    <Text style={teamStyles.chatSenderName}>{item.senderName}</Text>
                    <Text
                        style={teamStyles.chatMessagePreview}
                        numberOfLines={1}
                    >
                        {item.message}
                    </Text>
                </View>

                {/* Timestamp */}
                <View>
                    <Text style={teamStyles.chatTimestamp}>{item.time}</Text>
                </View>
            </View>
        </Swipeable>);
    return (

        <GestureHandlerRootView style={[stylesheet.flex1]}>
            <SafeAreaView style={[stylesheet.padding15,stylesheet.flex1]}>
                {/* Team filter */}
                <View style={[stylesheet.dFlex, stylesheet.flexRow, stylesheet.flexGap20]}>
                    <View style={[stylesheet.flex1]}>
                        <TextInput
                            style={[stylesheet.formControl, stylesheet.marginBottom20, focusedInput === 'searchParam' && stylesheet.inputFocused]}
                            placeholder="Search..."
                            value={formData.searchParam}
                            onChangeText={(text) => handleInputChange('searchParam', text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={() => handleFocus('searchParam')}
                        />
                    </View>

                    <Pressable style={[stylesheet.iconBtn]}>
                        <Image source={images.filter}/>
                    </Pressable>

                </View>

                <PrimaryButton>
                    Add a new Team
                    {/*<Image style={{width:24,height:24}} source={images.plusWhite}/>*/}
                </PrimaryButton>
                {/* Team filter */}

                {/* Chat list body */}
                <GestureHandlerRootView>
                    <FlatList
                        data={chatData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={teamStyles.chatListContainer}
                    />
                </GestureHandlerRootView>

                {/* Chat list body */}

            </SafeAreaView>
        </GestureHandlerRootView>);

}

export default TeamScreen;
