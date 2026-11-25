import ProfileImage from "./ProfileImage";
import ProfileDetails from "./ProfileDetails";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">

      <ProfileImage
        image={props.image}
        name={props.name}
      />

      <ProfileDetails
        name={props.name}
        role={props.role}
        description={props.description}
      />

    </div>
  );
}

export default ProfileCard;