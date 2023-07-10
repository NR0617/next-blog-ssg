# next-blog-ssg

## 프로젝트 소개

- nextjs와 typescript를 이용하여 정적 페이지 만들기

## 프로젝트 구조

```bash
├── pages
│   ├── [id].tsx
│   └── index.tsx
└── __posts : _.md 파일이 있는 폴더

```

## 프로젝트 설명

- \_\_posts 폴더에 있는 .md 파일을 리스트로 만들어서 index.tsx 파일에서 해당 리스트를 보여준다
- index.tsx 파일 경로("/")에서 리스트의 아이템중 하나를 클릭했을 때, 해당 아이템의 상세보기 페이지로 이동한다.
- 상세보기 페이지는 .md 파일의 contents를 보여준다.
- 전체 리스트를 볼 수 있는 페이지(index.tsx)는 GetStaticProps를 이용하여 완성된 html을 받아서 사용자에게 보여준다
- 상세 페이지([id].tsx)는 GetStaticProps, GetStaticPaths를 이용하여 지정된 경로로 이동하면서 경로에서 보여줄 포스트의 내용을
  완성된 html로 받아서 사용자에게 보여준다.
- md파일의 마크다운은 unified, remark-parse, remark-rehype, rehype-stringify을 이용하여 html element로 변환하였다.
- react의 컴포넌트로 html을 보여주기 위해 `<div dangerouslySetInnerHTML={{ __html: content }} />`을 사용했다.
