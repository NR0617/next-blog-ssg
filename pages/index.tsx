import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import React, { useState } from "react";

// 서버쪽
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function Page({ title, content }) {
  console.log(title, content);
  // const mdText = `
  // # Our Project

  // Hello, **Markdown!**.
  // `;

  // const mdAst = unified().use(markdown).parse(mdText);
  // const html_text = unified()
  //   .use(markdown)
  //   .use(remark2rehype)
  //   .use(html)
  //   .processSync(mdText);

  // console.log(mdAst);
  // console.log(html_text.toString());

  // const result = unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(rehypeStringify)
  //   .processSync("## Hello, *World*!");

  // console.log(result.value);
  // const [test, setTest] = useState(result.value);

  // function createMarkup() {
  //   return { __html: result.value };
  // }
  return (
    <div>
      <h1>홈</h1>
      <div dangerouslySetInnerHTML={{ __html: title }} />

      {/* <div dangerouslySetInnerHTML={{ __html: test }} />
      <div dangerouslySetInnerHTML={createMarkup()} />
      <div dangerouslySetInnerHTML={{ __html: html_text.toString() }} /> */}
    </div>
  );
}

export async function getStaticProps() {
  //const list = ["__posts/text.md", "__posts/second.md"];
  const filePath = path.join(process.cwd(), "__posts/text.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  console.log(matter(fileContents));

  const markdown = marked(data.description);
  const title = marked(data.title);

  return {
    props: {
      title,
      content: markdown,
    },
  };
}
