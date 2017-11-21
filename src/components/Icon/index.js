import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import searchIcon from '../../assets/images/icons/search.png';
import logoIcon from '../../assets/images/icons/logo.png';
import menuIcon from '../../assets/images/icons/menuIcon.png';
import checkedIcon from '../../assets/images/icons/checked.png';
import editList from '../../assets/images/icons/editListIcon.png';
import addCallIcon from '../../assets/images/icons/addCallIcon.png';

const icons = {
  search: {
    source: searchIcon,
    width: 20,
    height: 20,
  },
  logo: {
    source: logoIcon,
    width: 20,
    height: 24,
  },
  humburgerMenu: {
    source: menuIcon,
    width: 24,
    height: 14,
  },
  checked: {
    source: checkedIcon,
    width: 16,
    height: 15,
  },
  editList: {
    source: editList,
    width: 34,
    height: 22,
  },
  addCallIcon: {
    source: addCallIcon,
    width: 27,
    height: 23,
  },
};

const Icon = props => {
  const { name } = props;

  const ratio = props.ratio ? props.ratio : 1;
  const width = props.width
    ? Math.ceil(props.width * ratio)
    : Math.ceil(icons[name].width * ratio);
  const height = props.height
    ? Math.ceil(props.height * ratio)
    : Math.ceil(icons[name].height * ratio);

  return (
    <View {...props.style}>
      <Image
        source={icons[name].source}
        style={{
          width,
          height,
        }}
      />
    </View>
  );
};

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
  ratio: PropTypes.number,
};

Icon.defaultProps = {
  width: 0,
  height: 0,
  style: {},
  ratio: 0,
};

export default Icon;
