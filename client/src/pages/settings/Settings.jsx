import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Settings() {
  const { user } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="profileInfo">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src={user.profilePicture} alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
