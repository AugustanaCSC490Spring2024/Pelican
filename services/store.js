import { NavigationContainerRef } from '@react-navigation/native';

export const store = {
  navigationRef: React.createRef(),
};

export function navigate(name, params) {
  if (store.navigationRef.current?.isReady()) {
    store.navigationRef.current?.navigate(name, params);
  }
}