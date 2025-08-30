
import React from 'react'; 
import './ProfileCard.css'; 

function ProfileCard({ imageUrl, name, title, bio }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`Profile of ${name}`} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
}

// This line makes the component available to be used in other files.
export default ProfileCard;