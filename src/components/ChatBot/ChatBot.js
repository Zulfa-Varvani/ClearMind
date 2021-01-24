import React, { Component } from 'react';
import {
    View,
    ScrollView,
    AsyncStorage,
    StyleSheet,
    // Keyboard
} from 'react-native';
import ChatFooter from './ChatFooter';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';

let uid = 0;

class ChatBot extends Component {

    state = { 
        chatArray: [], 
        currentChat: [],
        previousValue: [],
        username: '', 
        showUserInput: 'null', 
        endChat: false, 
        userText: '', 
        isDateTimePickerVisible: false,
        progress: 0,
        sliderMax: 0,
        customComponent: null,
        customComponentText: null,
        previousChatLength: 0,
        chatInputButtonDisabled: true
        // scrollViewHeight: 0
    }

    componentWillMount() {
        AsyncStorage.getItem('username', (error, result) => {
            if (error) {
                this.setState({
                    username: this.props.previousValue
                });
            } else if (result == null) {
                this.setState({
                    username: this.props.previousValue
                });
            } else {
                this.setState({
                    username: result
                });
            }
        });
        this.state.previousValue.push(this.props.previousValue);
        this.state.currentChat = this.props.questions[0];
        // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    // _keyboardDidShow = (e) => {
    //     console.log('Keyboard show');
    //     this.refs.scrollView.scrollTo({ 
    //         x: 0, 
    //         y: 0, 
    //         animated: true 
    //     });
    //     this.refs.scrollView.scrollTo({ 
    //         x: 0, 
    //         y: 420, 
    //         animated: true
    //     });
    // }

    // _keyboardDidHide = () => {
    //     console.log('Keyboard hide');
    //     this.refs.scrollView.scrollTo({ 
    //         x: 0, 
    //         y: this.state.scrollViewHeight, 
    //         animated: true
    //     });
    // }

    // handleScroll = (event) => {
    //     console.log(event.nativeEvent.contentOffset.y);
    //     this.setState({ 
    //         scrollViewHeight: event.nativeEvent.contentOffset.y
    //     });
    // }

    componentDidMount() {
        this.addToChatArray(uid, this.state.currentChat.message, false);
        this.showNextChatWithDelay(this.state.currentChat.trigger);
    }

    componentDidUpdate() {
        if (this.state.customComponent !== null) {
            this.state.chatArray.push(this.state.customComponent);
            this.showNextChatWithDelay(this.state.currentChat.trigger);
            this.setState({
                customComponent: null
            });
        }

        if (this.state.customComponentText !== null) {
            this.saveUserInput(uid, this.state.customComponentText);
            this.showNextChatWithDelay(this.state.currentChat.trigger);
            this.setState({
                customComponentText: null
            });
        }
    }

    onContentSizeChange() {
        this.refs.scrollView.scrollToEnd({ animated: true });
    }

    onSliderValue(s) {
        // let c = '';
        // switch (Number(s.value)) {
        //     case 1:
        //         c = 'Not at all';
        //         break;
        //     case 2:
        //         c = 'Very little';
        //         break;
        //     case 3:
        //         c = 'Somewhat';
        //         break;
        //     case 4:
        //         c = 'Quite a bit';
        //         break;
        //     case 5:
        //         c = 'A lot';
        //         break;
        //     default:
        // }
        this.saveUserInput(uid, s.marker);
        //If value on check in slider is 5 navigate to SOS screen
        // if (value === 5) {
        //     this.props.navigateToSos();
        // } else {
            this.showNextChat(s.trigger);
        // }
    }

    onChoiceTouch(type, choice) {
        if (type === 'array') {
            const array = [];
            let i;
            for (i = 0; i < choice.length; i++) {
                array.push(choice[i].value);
            }
            this.saveUserInput(uid, array.join(', '));
            this.showNextChat(choice[0].trigger);
        } else {
            this.saveUserInput(uid, choice.value);
            this.showNextChat(choice.trigger);
        }
    }

    onButtonPress() {
        this.setState({ chatInputButtonDisabled: true });
        const text = this.state.userText;
        this.saveUserInput(uid, text);
        this.setState({
            userText: ''
        });
        this.showNextChat(this.state.currentChat.trigger);
    }

    returnChatDelay() {
        return (this.props.delay != null) ? 
            this.props.delay : 
            0 + (this.state.previousChatLength * 25);
    }

    addToChatArray(key, text, user) {
        if (!user && text.includes('{previousValue}')) {
            text = text.replace('{previousValue}', this.state.previousValue.pop());
        }
        if (!user && text.includes('{username}')) {
            text = text.replace('{username}', this.state.username);
        }

        //this.state.chatArray.push(<ChatBox user={user} key={key} text={text} />);
        if (!user) {
            setTimeout(() => 
            this.setState({ 
                chatArray: [
                    ...this.state.chatArray, 
                    ...[
                        <ChatBox 
                            user={user} 
                            key={key} 
                            text={text} 
                            userIcon={this.props.userIcon} 
                            cpuIcon={this.props.cpuIcon} 
                        />
                    ]
                ] 
            }), this.returnChatDelay());
        } else {
            this.setState({ 
                chatArray: [
                    ...this.state.chatArray, 
                    ...[
                        <ChatBox 
                            user={user} 
                            key={key} 
                            text={text} 
                            userIcon={this.props.userIcon} 
                            cpuIcon={this.props.cpuIcon} 
                        />
                    ]
                ] 
            });
        }
    }

    searchChatFile(index) {
        let i = 0;
        for (i = 0; i < this.props.questions.length; i++) {
            if (this.props.questions[i].id === index) {
                return this.props.questions[i];
            }
        }
        return null;
    }

    calculateProgress(id) {
        this.setState({
            progress: ((id) / this.props.questions.length)
        });
    }

    showNextChatWithDelay(trigger) {
        setTimeout(() => this.showNextChat(trigger), this.returnChatDelay());
    }

    showNextChat(index) {
        uid++;
        this.calculateProgress(this.state.currentChat.id);
        this.setState({
            previousChatLength: this.state.currentChat.message.length
        });
        if (this.state.currentChat.end === 'false') {
            this.setState({
                endChat: false
            });
            if (this.searchChatFile(index) != null) {
                this.state.currentChat = this.searchChatFile(index);
                if (this.state.currentChat.user === 'false') {
                    if (this.state.currentChat.custom === 'true') {
                        this.showCustomComponent(this.state.currentChat.customid);
                    } else {
                        this.addToChatArray(uid, this.state.currentChat.message, false);
                    }
                    this.setState({
                        showUserInput: 'null'
                    });
                    if (this.state.currentChat.custom === 'false') {
                        this.showNextChatWithDelay(this.state.currentChat.trigger);
                    }
                } else if (this.state.currentChat.options.length !== 0) {
                    this.setState({
                        showUserInput: 'choices'
                    });
                } else if (this.state.currentChat.slider.length !== 0) {
                    this.setState({
                        showUserInput: 'slider',
                        sliderMax: this.state.currentChat.slider.length
                    });
                } else {
                    this.setState({
                        showUserInput: 'input'
                    });
                }
            }
        } else {
            this.setState({
                endChat: true
            });
            this.props.onChatEndCallback();
        }
    }

    showCustomComponent(id) {
        this.props.customComponentCallback(id);
    }

    addCustomToChatArray(data) {
        this.setState({
            customComponent: data
        });
    }

    handleCustomReturn(data) {
      this.setState({
        customComponentText: data
      });
    }

    saveUserInput(id, data) {
        this.state.previousValue.push(data);
        this.addToChatArray(id, data, true);
        let storedId = this.props.ChatBotID;
        storedId = storedId.concat(':');
        AsyncStorage.setItem(
            storedId.concat(this.state.currentChat.id.toString()), 
            data
        );
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <ScrollView 
                    style={{ marginBottom: 10 }}
                    ref="scrollView"
                    // onScroll={this.handleScroll}
                    onContentSizeChange={() => { this.onContentSizeChange(); }}
                >
                    <ChatHeader chatHeader={this.props.chatHeader} />
                    {this.state.chatArray}
                </ScrollView>
                <ChatFooter
                    userInput={this.state.showUserInput}
                    contentChangeCallback={this.onContentSizeChange.bind(this)}
                    value={this.state.userText} 
                    onChangeText={userText => {
                        this.setState({ userText });
                        if (!(userText === null || userText.match(/^ *$/) !== null)) {
                            this.setState({ chatInputButtonDisabled: false });
                        } else {
                            this.setState({ chatInputButtonDisabled: true });
                        }
                    }} 
                    placeholder="Your Response..." 
                    secureTextEntry={false} 
                    onPress={this.onButtonPress.bind(this)}
                    multipleOptionsSelect={this.state.currentChat.multipleOptionsSelect}
                    options={this.state.currentChat.options}
                    onChoiceCallback={this.onChoiceTouch.bind(this)}
                    onSliderCallback={this.onSliderValue.bind(this)}
                    maximumValue={this.state.sliderMax}
                    sliderArray={this.state.currentChat.slider}
                    chatInputButtonDisabled={this.state.chatInputButtonDisabled}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export { ChatBot };
