import React, { useContext } from "react";
import Thread from "./Thread";
import UserDisplayer from "../components/UserDisplayer";
import InfoDisplayer from "../components/InfoDisplayer";
import { BlogContext } from "../store/BlogContext";
import { Link } from "react-router-dom";

const HomeBody = ({ userId }) => {
  const [users, setUsers] = useContext(BlogContext);

  const displayThreads = () => {
    if (users[userId].number_of_threads > 0) {
      return users[userId].threads.map((thread, threadId) => (
        <Thread key={threadId} userId={userId} threadId={threadId} />
      ));
    } else {
      return <p>We don't have threads for this user!</p>;
    }
  };

  return (
    <div className="home-body">
      <UserDisplayer userId={0} />
      <InfoDisplayer userId={0} />

      {displayThreads()}
      <Link to="/create-thread">
        <button>Add Thread</button>
      </Link>
    </div>
  );
};

export default HomeBody;
