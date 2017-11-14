import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Touchable,
  OuterBox,
  Inner,
  Label,
  ContentHolder,
} from './style';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  onCheck() {
    this.setState({ checked: !this.state.checked });
    this.props.onCheck();
  }

  render() {
    const {
      label,
      containerStyle,
      labelStyle,
    } = this.props;
    return (
      <Touchable onPress={() => this.onCheck()} style={containerStyle}>
        <ContentHolder>
          <OuterBox
            style={{
              borderColor: this.state.checked ? '#2489C8' : '#95989A',
              backgroundColor: this.state.checked ? '#2489C8' : 'transparent',
            }}
          >
            <Inner
              source={require('../../assets/images/checked.png')}
              style={{ opacity: this.state.checked ? 1 : 0 }}
            />
          </OuterBox>
          <Label style={labelStyle}>{label}</Label>
        </ContentHolder>
      </Touchable>
    );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

CheckBox.defaultProps = {
  label: '',
  containerStyle: {},
  labelStyle: {},
};

export default CheckBox;
