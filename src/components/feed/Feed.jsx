import Post from "../post/Post";
import Share from "../shere/Share";
import { Posts } from "../../dummyData";
import "./feed.css";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((posts) => (
          <Post key={posts.id} posts={posts} />
        ))}
      </div>
    </div>
  );
}
