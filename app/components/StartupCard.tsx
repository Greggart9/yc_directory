import { format } from "path"

const StartupCard = ( { post }: {post: StartupTypeCard }) => {
  return (
    <li className=" ">
        <div className="">
            <p className="">
                {format(new Date(post._createdAt), 'MMMM dd, yyyy')}
            </p>
        </div>
    </li>
  )
}

export default StartupCard