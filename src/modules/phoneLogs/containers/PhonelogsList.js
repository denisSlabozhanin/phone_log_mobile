import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Dimensions, View } from 'react-native';
import * as actions from '../../../store/actionCreators/phonelogsActions';
import PreloaderScreen from '../../../components/PreloaderScreen';
import Phonelogs from '../components/PhonelogsList';
import LabelsMenu from './LabelsMenu';

const { width, height } = Dimensions.get('window');

const Layer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  height: ${height};
  width: ${width};
  z-index: ${({ index }) => index}
`;


class PhonelogsList extends Component {
  componentWillMount() {
    if (this.props.phonelogs.length === 0) {
      this.props.getPhoneLogs();
    }
  }

  render() {
    const {
      isPending,
      isEditMode,
      phonelogs,
    } = this.props;

    return isPending
      ? (
        <PreloaderScreen />
      )
      : (
        <View style={{ flex: 1, position: 'relative' }}>
          {!!isEditMode &&
            <Layer index={2}>
              <LabelsMenu isOpened={true} />
            </Layer>
          }
          <Layer index={1}>
            <Phonelogs
              navigation={this.props.navigation}
              phonelogs={phonelogs}
              isEditMode={isEditMode}
            />
          </Layer>
        </View>
      );
  }
}

PhonelogsList.propTypes = {
  isPending: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  phonelogs: PropTypes.array.isRequired,
  getPhoneLogs: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ phonelogs, app }) => ({
  phonelogs: phonelogs.phonelogsList,
  isPending: phonelogs.isPendingPhoneLogs,
  isEditMode: app.isListEditMode,
});

export default connect(mapStateToProps, actions)(PhonelogsList);
