import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TaxGPT — your AI tax advisor</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container`}>
        <h1>Typography</h1>
        <div>
          <p>
            The purpose of this HTML is to help determine what default settings are with CSS and to
            make sure that all possible HTML Elements are included in this HTML so as to not miss
            any possible Elements when designing a site.
          </p>
          <hr />
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>
            <small>
              <a href="#wrapper">[top]</a>
            </small>
          </p>
          <hr />
          <h2 id="paragraph">Paragraph</h2>
          <p>
            Lorem ipsum dolor sit amet,{' '}
            <a href="#" title="test link">
              test link
            </a>{' '}
            adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt
            nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi
            volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed
            tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
            commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam
            dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam
            sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
            Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim
            diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy.
            Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            Morbi imperdiet augue quis tellus.
          </p>
          <p>
            <small>
              <a href="#wrapper">[top]</a>
            </small>
          </p>
          <hr />
          <h2 id="list_types">List Types</h2>
          <h3>Definition List</h3>
          <dl>
            <dt>Definition List Title</dt>
            <dd>This is a definition list division.</dd>
          </dl>
          <h3>Ordered List</h3>
          <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ol>
          <h3>Unordered List</h3>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
          <p>
            <small>
              <a href="#wrapper">[top]</a>
            </small>
          </p>
          <hr />

          <h2 id="tables">Tables</h2>
          <table cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <th>Table Header 1</th>
                <th>Table Header 2</th>
                <th>Table Header 3</th>
              </tr>
              <tr>
                <td>Division 1</td>
                <td>Division 2</td>
                <td>Division 3</td>
              </tr>
              <tr className="even">
                <td>Division 1</td>
                <td>Division 2</td>
                <td>Division 3</td>
              </tr>
              <tr>
                <td>Division 1</td>
                <td>Division 2</td>
                <td>Division 3</td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>
              <a href="#wrapper">[top]</a>
            </small>
          </p>
          <hr />
          <h2 id="misc">Misc Stuff – abbr, acronym, pre, code, sub, sup, etc.</h2>
          <p>
            Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing
            elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis
            suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
            gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat
            justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget
            sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym>{' '}
            Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            Morbi imperdiet augue quis tellus. <abbr title="Avenue">AVE</abbr>
          </p>
          <pre>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis
            est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
            Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
            mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam
            eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy.{' '}
            <acronym title="National Basketball Association">NBA</acronym>
            Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            Morbi imperdiet augue quis tellus.
            <abbr title="Avenue">AVE</abbr>
          </pre>
          <blockquote>
            <p>
              “This stylesheet is going to help so freaking much.”
              <br />
              -Blockquote
            </p>
          </blockquote>
          <p>
            <small>
              <a href="#wrapper">[top]</a>
            </small>
            <br />
          </p>
        </div>
      </main>
    </Layout>
  )
}
