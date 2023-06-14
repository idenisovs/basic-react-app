import React, { useEffect, useState } from 'react';
import TrafficLightsSimple from './TrafficLightsSimple';
import { trafficLightsStates as states } from './TrafficLightsStates';

export function TrafficLights() {
  const [ trafficLightsState, setTrafficLightsState ] = useState(states.STOP);
  const [ title, setTitle ] = useState('');

  useEffect(() => {
    switch (trafficLightsState) {
      case states.RUN:
        setTitle('Walk!');
        break;
      case states.SWITCHING:
        setTitle('Wait...');
        break;
      case states.STOP:
        setTitle('Stop!');
        break;
    }
  }, [trafficLightsState]);

  function changeLights() {
    const nextState = trafficLightsState === states.STOP ? states.RUN : states.STOP;

    setTrafficLightsState(states.SWITCHING);

    setTimeout(() => {
      setTrafficLightsState(nextState);
    }, 2000);
  }

  return <TrafficLightsSimple title={title} state={trafficLightsState} onChange={changeLights}/>
}