import {formatDate} from '@/lib/utils'
import { EyeIcon, Link } from 'lucide-react'

const StartupCard = ( { post }: {post: StartupTypeCard }) => {
  const { _createdAt, views, author:{ id: authorId, name}, title, category, _id,
image } = post
  return (
    <li className="group bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 transition-all duration-500 hover:border-primary hover:shadow-300 hover:bg-primary-100">
        <div className="flex justify-between items-center">
            <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
                { formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
              <EyeIcon className='size-6 text-primary' />
              <span className='font-medium text-[16px] text-black'>{post.views}</span>
            </div>
        </div>

        <div className='flex justify-between items-center mt-5 gap-5'>
          <div className='flex-1'>
            <Link href={`/user/${authorId}`}>
              <p className='font-medium text-[16px] text-black line-clamp-1'>
                {name}</p>

            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className='font-bold text-[26px] text-black line-clamp-1'>{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${authorId}`} className='w-[100px] h-[100px] rounded-[22px] overflow-hidden'>
            <img src= "https://placehold.co/600x400" alt='placeholder' width={48} height={48} className='rounded-full'  />
          </Link>
        </div>
    </li>
  )
}

export default StartupCard