import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostParams {
  id: string;
  [key: string]: string; // 인덱스 시그니처를 추가하여 string 형식의 다른 매개변수도 처리할 수 있도록 합니다.
}

export default function PostPage({ post }: { post: Post }): JSX.Element {
  const { id, title, content } = post;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const postsDirectory = path.join(process.cwd(), "__posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      params: { id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { post: Post },
  PostParams
> = async ({ params }) => {
  const { id } = params;

  const filePath = path.join(process.cwd(), "__posts", `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const markdownContent = marked(content);

  const post: Post = {
    id,
    title: data.title,
    content: markdownContent,
  };

  return {
    props: {
      post,
    },
  };
};
