import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './TrafficLightsSimple.scss';
import { trafficLightsStates as states } from './TrafficLightsStates';

function TrafficLightsSimple(props) {
  const { state, title, onChange } = props;

  return (
    <section className={style.TrafficLightsSimple}>
      <header>
        <strong>{title}</strong>
      </header>
      <div className={style.Lights}>
        <span id="red" className={classNames(style.Light, style.Red, { [style.On]: state === states.STOP })} />
        <span id="yellow" className={classNames(style.Light, style.Yellow, { [style.On]: state === states.SWITCHING })} />
        <span id="green" className={classNames(style.Light, style.Green, { [style.On]: state === states.RUN })} />
        <button type="button" onClick={onChange} disabled={state === states.SWITCHING}>
          Change
        </button>
      </div>
    </section>
  );
}

TrafficLightsSimple.propTypes = {
  state: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

TrafficLightsSimple.defaultProps = {
  state: states.STOP,
  title: '',
  onChange: () => {}
};

export default TrafficLightsSimple;
