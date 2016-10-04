import React, { Component, PropTypes } from 'react';
import constants from './constants';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {
      rmClass,
      btnType,
      disabled,
      flat,
      floating,
      large,
      waves
    } = this.props;

    let type = btnType;
    let classes = {
      btn: true,
      disabled,
      'waves-effect': waves
    };

    if (constants.Waves.indexOf(waves) > -1) {
      classes['waves-' + waves] = true;
    }

    let styles = {
      flat,
      floating,
      large
    };
    constants.Styles.forEach(style => {
      classes['btn-' + styles] = styles[style];
    });
    return (
      <button ClassName={this.props.rmClass} type={this.props.btnType} disabled={this.props.disabled}></button>
    );
  }
}

Button.propTypes = {
  rmClass: PropTypes.string,
  disabled: PropTypes.bool,
  waves: PropTypes.oneOf(constants.Waves),
  onClick: PropTypes.func,

  flat: PropTypes.bool,
  floating: PropTypes.bool,
  large: PropTypes.bool,

  btnType: PropTypes.node
};

Button.defaultProps = {
  btnType: 'button'
};
