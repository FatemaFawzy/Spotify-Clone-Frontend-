import React from "react";
import "./notification.css"

const Notification = ({name,username }) => {
  return (
    <div>
      <div className="notification">
        <div border>
          <ul className="conTainer">
            <li className="bulletPoint">
              <span className="text">
                <span>
                  {username}
                    {name}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Notification;
