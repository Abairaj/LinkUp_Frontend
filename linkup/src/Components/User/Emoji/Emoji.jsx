import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function Emoji({post_id}) {
  const [showEmoji, setShowEmoji] = useState({post_id:false});

  const handleshowEmoji = (post_id) => {
    setShowEmoji({post_id:!showEmoji[post_id]})
  };
  console.log(showEmoji,'fjkdgjkfgfd');
  return (
    <div>
      {showEmoji[post_id] && <Picker data={data} onEmojiSelect={console.log} />}
      <button onClick={handleshowEmoji(post_id)}>&#128515;</button>
    </div>
  );
}
