import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
interface HistoryListenerProps {}
const BackButtonFix: React.FC<HistoryListenerProps> = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    document.addEventListener('ionBackButton', (ev: any) => {
      console.log({ ionBackButtonEvent: ev });
      ev.detail.register(10, () => {
        history.goBack();
        //can check router.canGoBack to determine to exit app or not
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
export default BackButtonFix;