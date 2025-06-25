import Nav from "../../components/Nav";

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Nav />
      <div>BlogDetail page {id}</div>
    </div>
  );
};
export default BlogDetail;
