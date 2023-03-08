import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import md from 'markdown-it'
const anchor = require('markdown-it-anchor')

const mdDir = path.join(process.cwd(), 'md')

export function getIds() {
  const fileNames = fs.readdirSync(mdDir)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'about'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'resources'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export function getPageData(id) {
  const fullPath = path.join(mdDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the page metadata section
  const matterResult = matter(fileContents)

  const contentHtml = md({ html: true })
    .use(anchor, {
      permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
    })
    .use(require('markdown-it-toc-done-right'))
    .render(matterResult.content) // processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
