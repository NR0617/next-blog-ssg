import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  id: string;
  title: string;
}

interface ListPageProps {
  posts: Post[];
}

export default function ListPage({ posts }: ListPageProps): JSX.Element {
  return (
    <div>
      <h1>포스트 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ListPageProps> = async () => {
  const postsDirectory = path.join(process.cwd(), "__posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      id,
      title: data.title,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
