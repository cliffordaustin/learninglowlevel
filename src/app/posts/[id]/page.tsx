import Navbar from "@/components/Navbar";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { serverClient } from "@/app/_trpc/serverClient";
import rehypeRaw from "rehype-raw";
import PostNavigate from "@/components/PostNavigate";
import Image from "next/image";
import Head from "next/head";

async function PostPage({ params }: { params: { id: string } }) {
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
    >
      {props.children}
    </SyntaxHighlighter>
  ));

  CustomSyntaxHighlighter.displayName = "CustomSyntaxHighlighter";

  return (
    <main>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} />
        <meta name="keywords" content={post?.tags.join(",")} />

        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.thumbnail} />

        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.description} />
        <meta name="twitter:image" content={post?.thumbnail} />

        <meta name="robots" content="index, follow" />
      </Head>
      <div className="sticky top-0 left-0 right-0 w-full z-10 bg-white dark:bg-[#242423]">
        <Navbar></Navbar>
      </div>

      <div className="dark:text-white break-words max-w-[800px] overflow-hidden mx-auto bg-gray-100 dark:bg-[#333533] h-full min-h-screen py-8 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-3xl">{post?.title}</h1>
        <div className="relative max-w-full h-[300px] md:h-[350px] my-8 mx-auto">
          {post?.thumbnail && (
            <Image
              className="object-cover"
              src={post?.thumbnail}
              alt={post?.title || ""}
              fill
            />
          )}
        </div>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          className="max-w-full prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-img:mx-auto prose-img:object-contain prose-img:w-[500px] prose-img:sm:w-[600px] prose-img:max-h-[350px] prose-img:md:max-h-[430px] prose md:prose-lg dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent"
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

        <PostNavigate prevId={post?.prevId} nextId={post?.nextId} />
      </div>
    </main>
  );
}

export default PostPage;
