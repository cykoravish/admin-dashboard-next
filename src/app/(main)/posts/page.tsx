import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostPage = () => {
  return (
    <>
      <BackButton text="go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostPage;
