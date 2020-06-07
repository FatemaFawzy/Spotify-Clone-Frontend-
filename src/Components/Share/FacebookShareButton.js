import React from "react";
import { FacebookIcon } from "react-share";

function FacebookShareButton() {
  return (
    <div>
      <div
        data-href="https://developers.facebook.com/docs/plugins/"
        data-layout="button"
      >
        <a
          class="fb-share-button"
          href="https://www.facebook.com/sharer/sharer.php?u=https://www.hello.com"
        >
          <FacebookIcon size={20} round={true} />
        </a>
      </div>
    </div>
  );
}

export default FacebookShareButton;
