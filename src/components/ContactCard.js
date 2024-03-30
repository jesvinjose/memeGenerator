import React, { useState } from "react";
import profile from "../images/profile.png";
// import starfilled from "../images/star-filled.png";
// import starempty from "../images/star-empty.png";
import "./ContactCard.css";
import Star from "./Star";
function ContactCard() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  // const [isFavorite, setIsFavorite] = useState(contact.isFavorite);

  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  /**
   * Challenge: Use a ternary to determine which star image filename
   * should be used based on the `contact.isFavorite` property
   *
   * `true` => "star-filled.png"
   * `false` => "star-empty.png"
   */

  /**
   * Challenge: Move the star image into its own component
   * - It should receive a prop called `isFilled` that it
   *   uses to determine which icon it will display
   * - Import and render that component, passing the value of
   *   `isFavorite` to the new `isFilled` prop.
   * - Don't worry about the abiliity to flip this value quite yet.
   *   Instead, you can test if it's working by manually changing
   *   `isFavorite` in state above.
   */

  // let starIcon = contact.isFavorite ? starfilled : starempty;

  function toggleFavorite() {
    setContact((prevState) => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite,
      };
    });
  }
  return (
    <div className="outest">
      <div className="outer">
        <img className="profile" src={profile} alt="" />
        <Star
          toggleFavorite={toggleFavorite}
          isFilled={contact.isFavorite}
        />
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
