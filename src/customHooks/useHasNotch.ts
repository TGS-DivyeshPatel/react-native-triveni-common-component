import { useState, useEffect } from 'react';
import DeviceInfo from 'react-native-device-info';

const useHasNotch = () => {
  const [hasNotch, setHasNotch] = useState(false);

  useEffect(() => {
    const checkNotch = async () => {
      const notch = await DeviceInfo.hasNotch();
      setHasNotch(notch);
    };

    checkNotch();
  }, []);

  return hasNotch;
};

export default useHasNotch;
