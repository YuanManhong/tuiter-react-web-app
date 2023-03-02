import React from "react";
import PostItem from "./postItem";
import posts from "./posts.json"

const PostList = () => {
    return (
        <ul className="list-group rounded-0">
            {posts.map(post =>
                <PostItem
                    key={post.id}
                    post={post}/>
            )
        }
        </ul>
    );
};
export default PostList;