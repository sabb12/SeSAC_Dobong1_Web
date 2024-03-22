export default function PostItem({ post }) {
  // post = {id: 1, title: "???", body: "????"}
  return (
    <div>
      <div>
        <div>No. {post.id}</div>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
    </div>
  );
}
