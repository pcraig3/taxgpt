import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

export async function getPageData(id) {
  const fullPath = path.join(mdDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the page metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
