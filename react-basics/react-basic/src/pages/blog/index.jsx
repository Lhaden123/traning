import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

const Blog = () => {
  return (
    <div>
      <Nav />
      <h3>These are the places to visit in Bhutan</h3>

      {[
        { name: "Bumthang", path: "bumthang" },
        { name: "Thimphu", path: "thimphu" },
        { name: "Haa", path: "haa" },
        { name: "paro", path: "paro" },
      ].map((place) => (
        <div key={place.path}>
          <Link to={`/blog/${place.path}`}>{place.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default Blog;
