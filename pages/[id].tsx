import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

interface Post {
  id: string | string[];
  title: string;
  content: string;
}

interface DetailPageProps {
  post: Post;
}

export default function PostDetail({ post }: DetailPageProps): JSX.Element {
  const { title, content } = post;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps<DetailPageProps> = async ({
  params,
}) => {
  const { id } = params;

  const filePath = path.join(process.cwd(), "__posts", `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);
  const htmlContent = processor.processSync(content).toString();

  const post: Post = {
    id,
    title: data.title,
    content: htmlContent,
  };

  return {
    props: {
      post,
    },
  };
};
