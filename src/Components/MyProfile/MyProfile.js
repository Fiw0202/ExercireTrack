import "./MyProfile.css";

const MyProfile = () => {
  return (
    <div className="MyProfile">
      <div className="myPro-BG">
        <div className="myprofile-left">
          <h1>My MyProfile</h1>
          <div>
            <img src="../../../public/assests/personal.png"
              alt="Personal image"></img>
            <div id="username">username</div>
          </div>
        </div>
        <div className="myfrofile-right">
          <form>
            <h1>Personal information</h1>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Surename"></input>
            <input type="date" placeholder=""></input>
            <input type="text" placeholder="Weight"></input>
            <input type="text" placeholder="Height"></input>
            <h2 id="gender">Gender</h2>
          </form>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
