import React from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "@mui/material/Avatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function NotificationBar() {
  return (
    <div>
      <div className="flex gap-4 items-center rounded-4xl p-6 pt-4 pb-4 bg-[#fdf4d9] shadow-[0px_1px_6px_0px_rgba(0,_0,_0,_0.1)]">
        {/* Email Icon */}
        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-4xl border border-[#9E7ABB]">
          <EmailIcon />
        </div>

        {/* Notification Icon */}
        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-4xl border border-[#9E7ABB]">
          <CircleNotificationsIcon />
        </div>

        {/* Avatar */}
        <div className="flex gap-2 items-center">
          <Avatar {...stringAvatar("Kent Dodds")} />
          <p>Kent Dodds</p>
        </div>
      </div>
    </div>
  );
}

export default NotificationBar;
