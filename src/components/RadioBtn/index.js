import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Touchable,
  OuterCircle,
  InnerCircle,
  Label,
  ContentHolder,
} from './style';

class RadioBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked || false,
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
          <Label style={labelStyle}>{label}</Label>
          <OuterCircle>
            <InnerCircle
              style={{
                opacity: this.state.checked ? 1 : 0,
              }}
            />
          </OuterCircle>
        </ContentHolder>
      </Touchable>
    );
  }
}

RadioBtn.propTypes = {
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

RadioBtn.defaultProps = {
  label: '',
  containerStyle: {},
  labelStyle: {},
};

export default RadioBtn;
