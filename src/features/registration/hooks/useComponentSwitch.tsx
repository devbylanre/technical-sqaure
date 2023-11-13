import { useState } from 'react';

const useComponentSwitch = (initialValue = 'start') => {
  // use state hook for handling the current component state
  const [currentComponent, setCurrentComponent] = useState(initialValue);

  // accept a parameter value to determine which component it has to switch to
  const switchToComponent = (value: string) => setCurrentComponent(value);

  return { currentComponent, switchToComponent };
};

export default useComponentSwitch;
