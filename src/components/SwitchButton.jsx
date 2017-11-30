import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { invertTheme } from '../redux/modules/utils/';
import Icon from '../components/Icon';
@connect(state => ({ utils: state.utils }), { invertTheme })
export default class SwitchButton extends Component {
  static propTypes = {
    // Styled-Components props
    className: PropTypes.string,
    utils: PropTypes.shape({
      isUsingLightTheme: PropTypes.bool.isRequired,
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
    }).isRequired,
    invertTheme: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { primaryColor, secondaryColor } = this.props.utils;
    return (
      <Container className={this.props.className}>
        <Icon name="sun-o" color={primaryColor} />
        <Label
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        >
          <input
            type="checkbox"
            onChange={this.props.invertTheme}
            value={!this.props.utils.isUsingLightTheme ? 'on' : 'off'}
            checked={!this.props.utils.isUsingLightTheme}
          />
          <span />
        </Label>
        <Icon name="moon-o" color={primaryColor} />
      </Container>
    );
  }
}

const labelWidth = '4rem';
const mobileLabelWidth = '2rem';

const Container = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin: 0 1rem;
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 2.25rem;
  width: ${labelWidth};
  span:before {
    -webkit-transition: 0.5s;
    background-color: ${props => props.secondaryColor};
    border-radius: ${props => props.theme.borderRadius.full};
    content: '';
    height: 2rem;
    position: absolute;
    top: 0.15rem;
    bottom: 0.15rem;
    left: 2.5%;
    right: 0.15rem;
    transition: 0.5s;
    width: 2rem;
  }
  span {
    border-radius: 1rem;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.primaryColor};
    transition: 0.5s;
    -webkit-transition: 0.5s;
  }
  input:checked + span:before {
    -webkit-transform: translateX(90%);
    -ms-transform: translateX(90%);
    transform: translateX(90%);
  }
  input:focus + span {
    box-shadow: ${props => props.theme.shadows.default};
  }
  input {
    visibility: hidden;
  }
`;

Label.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};
