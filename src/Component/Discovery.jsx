import React from "react";
import Line from "../helper/Line";
import TopicDiscory from "../DiscoryComponents/TopicDiscory";
import NotificationAlert from "../DiscoryComponents/NotificationAlert";
import Collabration from "../DiscoryComponents/Collabration";
const Discovery = () => {
  return (
    <div>
      <TopicDiscory />

      <NotificationAlert />
      <Collabration />
    </div>
  );
};

export default Discovery;
