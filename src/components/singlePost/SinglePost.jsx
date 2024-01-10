import './singlePost.css' 

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg'
             src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
             alt="" />
             <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
             </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author: <b>Safak</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
              
            </div>
            <p className='singlePostDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio neque ab repudiandae esse tempora delectus ipsum aut obcaecati, dignissimos facere quod voluptatem distinctio, odio facilis magni nam deleniti, provident autem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio neque ab repudiandae esse tempora delectus ipsum aut obcaecati, dignissimos facere quod voluptatem distinctio, odio facilis magni nam deleniti, provident autem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio neque ab repudiandae esse tempora delectus ipsum aut obcaecati, dignissimos facere quod voluptatem distinctio, odio facilis magni nam deleniti, provident autem?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio neque ab repudiandae esse tempora delectus ipsum aut obcaecati, dignissimos facere quod voluptatem distinctio, odio facilis magni nam deleniti, provident autem?
            </p>

        
        </div>
    </div>
  )
}
