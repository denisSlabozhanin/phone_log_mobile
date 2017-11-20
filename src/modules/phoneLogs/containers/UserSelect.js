import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../store/actionCreators/phonelogsActions';
import UserSelectCmp from '../components/UserSelect';
import User from '../components/UserSelect/User';
import RadioBtn from '../../../components/RadioBtn';
import EmptyList from '../components/PhonelogsList/EmptyList';

class UserSelect extends Component {
  componentWillMount() {
    if (this.props.usersList.length === 0) {
      this.props.getUsersList();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.usersList.length !== this.props.usersList.length) {
      const users = nextProps.usersList.map(user => ({
        ...user,
        selected: false,
      }));

      this.setState({
        users,
      });
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
    return usersList.map((user, index) => (
      <RadioBtn
        key={index}
        labelCmp={this.renderUser(user)}
        priority={'label radio'}
        checked={this.state.users[index].selected}
        onCheck={() => this.onUserSelect(user)}
        radioStyles={{ marginTop: 27, marginRight: 20 }}
        style={{ borderBottomWidth: 1, borderBottomColor: '#eee' }}
      />
    ));
  }

  render() {
    return this.props.usersList.length === 0
      ? (
        <EmptyList />
      )
      : (
        <UserSelectCmp
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
