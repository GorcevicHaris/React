function Profile(props) {
  console.log(props);
  return (
    <div>
      <h1>name: {props.name}</h1>
      <h1>username: {props.username}</h1>
      <h1>description: {props.description}</h1>
    </div>
  );
}
export default Profile;
