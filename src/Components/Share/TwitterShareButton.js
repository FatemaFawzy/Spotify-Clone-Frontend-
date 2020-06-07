import React from "react";
import { TwitterIcon } from "react-share";

function ShareButton() {
  return (
    <div>
      <div data-layout="button">
        <a
          class="twitter-share-button"
          href="http://twitter.com/share?url=https://www.google.com"
        >
          <TwitterIcon size={20} round={true} />
        </a>
      </div>
    </div>
  );
}

export default ShareButton;
