import React from 'react'
import {useRouter} from "next/router"
import BlogPostLayout from '../../../components/BlogPostLayout'
import {BASE_URL} from "../../../config"

function BlogItem({post}) {
    const router  = useRouter()
    const { id } = router.query
    return (
        <div>
            <BlogPostLayout frontMatter={post} />
        </div>
    )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${BASE_URL}/blogs/${context.params.id}`)

  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/blogs`)
  const posts = await res.json()
  const ids = posts.map(post => post.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))
  return {
      paths,
      fallback: false
  }
}

export default BlogItem
