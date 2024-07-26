import Navbar from "@/components/Navbar";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { serverClient } from "@/app/_trpc/serverClient";
import prisma from "@/db/db";

async function PostPage({ params }: { params: { id: string } }) {
  // await prisma.post.update({
  //   where: { id: params.id },
  //   data: { content: markdown },
  // });

  const post = await serverClient.getPostById(params.id);

  const CustomSyntaxHighlighter = React.forwardRef<
    HTMLElement,
    SyntaxHighlighterProps
  >((props, ref) => (
    <SyntaxHighlighter
      {...props}
      PreTag="div"
      language={props.language}
      style={dracula}
      // ref={ref}
    >
      {props.children}
    </SyntaxHighlighter>
  ));

  CustomSyntaxHighlighter.displayName = "CustomSyntaxHighlighter";

  return (
    <main>
      <div className="sticky top-0 left-0 right-0 w-full z-10 bg-white dark:bg-[#242423]">
        <Navbar></Navbar>
      </div>

      <div className="dark:text-white max-w-[800px] mx-auto bg-gray-100 dark:bg-[#333533] h-full min-h-screen py-8 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-3xl">{post?.title}</h1>
        <ReactMarkdown
          className="max-w-full prose-img:mx-auto prose-img:object-cover prose-img:w-[500px] prose-img:sm:w-[500px] prose-img:h-[350px] prose-img:md:h-[430px] prose md:prose-lg dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent"
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <CustomSyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  language={match[1]}
                  style={dracula}
                >
                  {String(children).replace(/\n$/, "")}
                </CustomSyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post?.content}
        </ReactMarkdown>
      </div>
    </main>
  );
}

export default PostPage;