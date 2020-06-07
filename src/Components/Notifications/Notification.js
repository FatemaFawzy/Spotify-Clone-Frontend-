import React from "react";
import "./notification.css"

const Notification = ({name,username }) => {
  return (
    <div>
      <div className="notification">
        <div border>
          <ul>
            <li>
              <span className="text">
                <span>
                  {username}
                    {name}
                </span>
              </span>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Notification;
