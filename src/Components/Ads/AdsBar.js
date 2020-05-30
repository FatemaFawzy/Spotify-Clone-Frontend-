import React from "react";
import "./AdsBar.css"
import { Link } from "react-router-dom";

/** Function component AdsBar to display some ads only for free users
 * @func AdsBar
 */
const AdsBar = (props) => {

  /**Variable that holds the random texts that appear for ads
  * @type {Array<String>}
  */
  var adsTexts = [
    "Tired of these Ads? Why not upgrade to premium!",
    "These Ads are for free users only, upgrade to premium to remove them and a lot of other privileges.",
    "You are seeing this advertisement because you are a free user.",
    "Spotify premium is awesome. Why not try it!",
    "Thanks for listening to Spotify. Here is an advertisement for you because you are a free user!",
    "Premium users don't see these Ads. Sadly you are not.",
  ];

  /**Variable that holds the random images and their links that appear for ads
   * @type {Array<object>}
   */
  var adsImages = [
    {
      imagePath: "https://sites.google.com/site/dekchysite95/_/rsrc/1480944463347/extra-credit/google.png",
      url: "https://www.google.com/"
    },
    {
      imagePath: "https://pngimage.net/wp-content/uploads/2018/05/facebook-word-png-4.png",
      url: "https://www.facebook.com/"
    },
    {
      imagePath: "https://www.pngkey.com/png/full/3-31957_instagram-logo-instagram-logo-with-words.png",
      url: "https://www.instagram.com/"
    },
  ];

  /**Variable that picks up a random image and its link for an ad
   * @type {object}
   */
  var randomImage = adsImages[Math.floor((Math.random() * adsImages.length))];
  return (

    <div className="ads-bar-class">
      <div className="realtive-ads-bar-wrapping-div">
        {Math.floor((Math.random() * 2)) ?
          <a href={randomImage.url} target="_blank">
            <img src={randomImage.imagePath} />
          </a> : <p>{adsTexts[Math.floor((Math.random() * adsTexts.length))]}</p>}
        <Link className="upgrade-to-premium" to="/premium/">join premium</Link>

      </div>
    </div>
  )
}

export default AdsBar;


