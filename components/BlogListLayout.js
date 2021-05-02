import React, {useState, useEffect} from 'react'
import Link from "./Link"
import siteMetadata from '../data/siteMetadata.json'
import Tag from '../components/Tag'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }
export default function BlogListLayout({ posts, title }) {
  // const [searchValue, setSearchValue] = useState('')
  // const filteredBlogPosts = posts.filter((frontMatter) => {
  //   const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
  //   return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  // })

  const [pageSize, setPageSize] = useState(5)
  const actualPageSize = posts.length > pageSize ? pageSize : posts.length
  const [visiblePosts, setVisiblePosts] = useState([...posts.slice(0,actualPageSize)])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(Math.ceil(posts.length / pageSize))

  console.log(`totalPage`, totalPage)

  const nextBtnHandler = () => {
    if(currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
      setVisiblePosts([...posts.slice((currentPage)*pageSize,pageSize*(currentPage + 1))])
    }
  }

  const previousBtnHandler = () => {
    if(currentPage > 1 ) {
      setVisiblePosts([...posts.slice((currentPage - 2)*pageSize,pageSize*(currentPage - 1 ))])
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          {/* <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div> */}
        </div>
        <ul>
          {!visiblePosts.length && 'No posts found.'}
          {visiblePosts.reverse().map((frontMatter) => {
            const { slug, date, title, summary, tags, id } = frontMatter
            return (
              <li key={slug} className="py-4 border p-4 m-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${id}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="flex justify-center">
            {currentPage === 1 ? (
              <button disabled={true} className="m-2 bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={previousBtnHandler}>{'Previous'} </button>
            ) : (
              <button disabled={false} className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={previousBtnHandler}>{'Previous'} </button>
            )}
            
            {currentPage === totalPage ? (
                <button disabled={true}  className="m-2 bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={nextBtnHandler}>{'Next'} </button>
            ): (
                
                <button disabled={false}  className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextBtnHandler}>{'Next'} </button>
            )}
        </div>
      </div>
    </>
  )
}