import React from 'react';
import { View } from 'react-native';
import Navigation from '../Navigation/Navigation.js';
import Description from '../Description/Description.js';
import Home from '../Home/Home.js';
import * as userObject from '../../utilities/userObject.js';

export default class AppScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedPerson: 'Alex',
            user: [],
            users: userObject
        };

        this.updateSelectedUser = this.updateSelectedUser.bind(this);
        this.updateUserObject = this.updateUserObject.bind(this);
        this.filterUsers = this.filterUsers.bind(this);
    }

    componentWillMount() {
        this.filterUsers(this.state.selectedPerson);
    }

    updateSelectedUser(person) {
        console.log(person);
        this.setState({
                selectedPerson: person,
            }, function () {
                this.filterUsers(this.state.selectedPerson);
            }.bind(this));
        };

    
    filterUsers(selectedUser) {
        {userObject.users.user.filter((user) => {
            if (user.name === selectedUser) {
                this.updateUserObject(user);
        }})}
    }

    updateUserObject (user) {
        this.setState({
                user: user
            }, function () {
                this.updateBackground(user);
            }.bind(this));
        };

    updateBackground(user) {
        //var backgroundImage = document.getElementsByTagName("body");
        //backgroundImage[0].style.backgroundColor = "#D7D7D5";
    }

    render () {
        return (
                <View>
                    <Navigation
                        users={this.state.users}
                        selectedPerson={this.state.selectedPerson}
                        onSelect={this.updateSelectedUser}
                     />
                </View>
        )
    }
}