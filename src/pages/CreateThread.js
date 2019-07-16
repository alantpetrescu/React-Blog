import React, { useContext } from "react";
import Nav from "../components/Nav";
import { BlogContext } from "../store/BlogContext";

const CreateThread = () => {
  const [users, setUsers] = useContext(BlogContext);

  let titleThread = "";
  let descriptionThread = "";

  const handleTitleThreadChange = event => {
    titleThread = event.target.value;
  };

  const handleDescriptionThreadChange = event => {
    descriptionThread = event.target.value;
  };

  const handleSubmitThread = event => {
    event.preventDefault();

    let newContext = [...users];

    newContext[0].threads.push({
      title: titleThread,
      creator: "Petrescu Alexandru",
      description: descriptionThread,
      number_of_posts: 0,
      posts: {}
    });

    newContext[0].number_of_threads += 1;

    setUsers([...newContext]);
  };

  return (
    <div id="create-thread">
      <Nav />
      <form onSubmit={handleSubmitThread}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" onChange={handleTitleThreadChange} />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionThreadChange}
        />
        <input type="submit" value="Add thread" />
      </form>
    </div>
  );
};

export default CreateThread;
