import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../store/actionCreators/phonelogsActions';
import UserSelectCmp from '../components/UserSelect';
import User from '../components/UserSelect/User';
import RadioBtn from '../../../components/RadioBtn';
import EmptyList from '../components/PhonelogsList/EmptyList';
import Preloader from '../../../components/Preloader/index';

class UserSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    if (this.props.usersList.length === 0) {
      this.props.getUsersList();
    }
  }

  onUserSelect(user) {
    user.selected = true;
    this.setState({
      users: [
        ...this.state.users.map(storedUser =>
          storedUser.userName === user.userName ? user : storedUser),
      ],
    });
  }

  renderUser({ userName }) {
    return (
      <User
        name={userName}
      />
    );
  }

  renderUsers() {
    const { usersList } = this.props;
    return this.state.users.length > 0
      ? usersList.map((user, index) => (
        <RadioBtn
          key={index}
          labelCmp={this.renderUser(user)}
          priority={'label radio'}
          checked={this.state.users[index].selected}
          onCheck={() => this.onUserSelect(user)}
          radioStyles={{ marginTop: 27, marginRight: 20 }}
          style={{ borderBottomWidth: 1, borderBottomColor: '#eee' }}
        />
      ))
      : (
        <Preloader />
      );
  }

  render() {
    const {
      navigation,
      usersList,
    } = this.props;
    return usersList.length === 0
      ? (
        <EmptyList />
      )
      : (
        <UserSelectCmp
          navigation={navigation}
          renderUsers={() => this.renderUsers()}
        />
      );
  }
}

UserSelect.propTypes = {
  usersList: PropTypes.array.isRequired,
  getUsersList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ phonelogs }) => ({
  usersList: phonelogs.usersList,
});

export default connect(mapStateToProps, actions)(UserSelect);
