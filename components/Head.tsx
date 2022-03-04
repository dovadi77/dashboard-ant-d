import HeadTag from "next/head";

type HeadTagProps = {
  title?: string,
  desc?: string
}

const Head = ({ title = "Next.JS & Ant Design Dashboard", desc = "A Dashboard using next.js with Ant Design" }: HeadTagProps) => {
  return (
    <HeadTag>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </HeadTag>
  )
}

export default Head