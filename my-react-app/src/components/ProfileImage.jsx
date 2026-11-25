import "./ProfileImage.css";

function ProfileImage(props) {
  return (
    <img
      className="profile-image"
      src={props.image}
      alt={props.name}
    />
  );
}

export default ProfileImage;