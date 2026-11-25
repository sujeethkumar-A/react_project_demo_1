import "./ProfileDetails.css";

function ProfileDetails(props) {
  return (
    <div className="profile-details">
      <h2>{props.name}</h2>

      <h4>{props.role}</h4>

      <p>{props.description}</p>

      <button>View Profile</button>
    </div>
  );
}

export default ProfileDetails;