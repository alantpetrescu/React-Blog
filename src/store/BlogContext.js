import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = props => {
  const [state, setState] = useState([
    {
      name: "Petrescu Alexandru",
      username: "john",
      password: "john",
      number_of_threads: 1,
      threads: [
        {
          title: "Thread #1",
          creator: "Creator #1",
          description: "Description # 1",
          number_of_posts: 1,
          posts: [
            {
              title: "Post #1",
              creator: "Creator #1",
              content: "Content #1",
              number_of_comments: 1,
              comments: [
                {
                  title: "Comment #1",
                  creator: "Creator #1",
                  content: "Content #1"
                }
              ]
            }
          ]
        }
      ]
    }
  ]);

  return (
    <BlogContext.Provider value={[state, setState]}>
      {props.children}
    </BlogContext.Provider>
  );
};
