import { Fragment, useContext } from 'react';

import MainNavigation from './main-navigation';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      {/* {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )} // replaced with portal */}
    </Fragment>
  );
}

export default Layout;
