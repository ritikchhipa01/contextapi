import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'


function Blog() {
  const {loading, posts} = useContext(AppContext);
  return (
    <div className='flex flex-col w-[680px] mt-[60px] '>
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ?
          <div>
          <p>NO Data found</p>
          </div>
          :
          posts.map((post) => (

            <div key={post.id} className="mt-10">
            <p className=" text-lg  font-bold">{post.title}</p>
              <p>By <span>{post.author}</span> on <span className=' font-bold underline text-sm'>{post.category}</span></p>
              <p>Posted on {post.date}</p>

              <p className='mt-[12px] text-[17px]  tracking-normal text-black'>{post.content}</p>
              <div className=' flex flex-row gap-5'>
                {post.tags.map((tag, index) => (<p key={index} className=" text-blue-700 underline text-[12px] font-semibold mt-[5px]">#{tag}</p>))}
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Blog

