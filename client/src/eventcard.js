import React, { useState } from 'react';
import "../src/components/styles/HomeStyles.css";

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [comments, setComments] = useState(event.comments);
  const [newComment, setNewComment] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div
      className={`event-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="event-content">
        <img src={event.Img} alt={event.Name} className="event-image" />
        <div className="event-details">
          <h3 className="event-name">{event.Name}</h3>
          <p className="event-description">{event.Description}</p>
        </div>
      </div>
      {isHovered && (
        <div className="comment-section">
          <h4>Comments:</h4>
          {/* {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))} */}
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              placeholder="Write a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventCard;