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

  renderByPriority(priority) {
    const { labelCmp } = this.props;
    return priority === 'label radio'
      ? [
        labelCmp,
        this.renderRadio(),
      ]
      : [
        this.renderRadio(),
        labelCmp,
      ];
  }

  renderRadio() {
    return (
      <OuterCircle style={this.props.radioStyles}>
        <InnerCircle
          style={{
            opacity: this.state.checked ? 1 : 0,
          }}
        />
      </OuterCircle>
    );
  }

  render() {
    const { style, priority } = this.props;
    return (
      <Touchable onPress={() => this.onCheck()}>
        <ContentHolder style={style}>
          {this.renderByPriority(priority)}
        </ContentHolder>
      </Touchable>
    );
  }
}

RadioBtn.propTypes = {
  priority: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  labelCmp: PropTypes.node,
  radioStyles: PropTypes.object,
  style: PropTypes.object,
};

RadioBtn.defaultProps = {
  style: {},
  radioStyles: {},
};

export default RadioBtn;
