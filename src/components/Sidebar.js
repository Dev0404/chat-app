import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  const topSiderRef = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (topSiderRef.current) {
      setHeight(topSiderRef.current.scrollHeight);
    }
  }, [topSiderRef]);
  return (
    <div className="h-100 pt-2">
      <div ref={topSiderRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
