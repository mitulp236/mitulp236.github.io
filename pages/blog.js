import React from 'react'
import BlogListLayout from '../components/BlogListLayout'
import {BASE_URL} from "../config"

// example posts data
const blogs = [
    {
        "title": "1 Introducing Tailwind Nexjs Starter Blog",
        "date": "2021-01-12",
        "lastmod": "2021-01-18",
        "tags": [
            "next-js",
            "tailwind",
            "guide"
        ],
        "draft": false,
        "summary": "Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.",
        "images": [
            "/static/images/canada/mountains.jpg",
            "/static/images/canada/toronto.jpg"
        ],
        "slug": "introducing-tailwind-nextjs-starter-blog"
    },
]

function blog({posts}) {
    console.log(`posts`, posts)
    return (
        <div>
            <BlogListLayout posts={[...posts]} title="All Posts" />
        </div>
    )
}

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/blogs`)
  const posts = await res.json()
  return {
      props: {
          posts
      }
  }
}

export default blog
