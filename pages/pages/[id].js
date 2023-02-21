import Head from 'next/head'
import Layout from '../../components/layout'
import { getIds, getPageData } from '../../utils/pages'

export async function getStaticProps({ params }) {
  const pageData = await getPageData(params.id)
  return {
    props: {
      pageData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Page({ pageData }) {
  return (
    <Layout>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article>
        <h1>{pageData.title}</h1>
        <div>{pageData.subhead}</div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </Layout>
  )
}
