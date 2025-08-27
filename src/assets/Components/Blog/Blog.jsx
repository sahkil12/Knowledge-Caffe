import {  FaBookmark} from 'react-icons/fa';

const Blog = ({ blog }) => {
  console.log(blog);
  const {
    author,
    cover,
    excerpt,
    title,
    author_img,
    post_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img
        className="w-full object-cover h-[550px] rounded-2xl"
        src={cover}
        alt={`Cover Picture From ${title}`}
      />
      <div className="flex justify-between my-7 md:mx-4 items-center">
        <div className="flex gap-6 justify-center items-center">
          <img className="rounded-full w-16" src={author_img} alt="" />
          <div>
            <h4 className="font-bold text-2xl">{author}</h4>
            <p className="font-semibold text-[#414141d3]">{post_date}</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <h5 className="text-xl font-medium text-[#414141de]">{`${reading_time} min read`}</h5>
          <button className='text-xl'><FaBookmark></FaBookmark> </button>
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl/relaxed font-bold ">{excerpt} </h2>
      <div className="flex gap-3 text-xl font-medium text-[#414141de] my-3">
        <h4 className="space-x-5">{hashtags[0]} </h4>
        <h4 className="space-x-5">{hashtags[1]} </h4>
        <h4 className="space-x-5">{hashtags[2]} </h4>
      </div>

      <span className="text-blue-700 text-xl font-bold underline">Mark as read</span>
    </div>
  );
};

export default Blog;
