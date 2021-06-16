import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
           <div className="singlePageWrapper">
               <img src="https://www.tecnomint.com/images/brand/2.jpg" alt="" className="singlePostImg" />
               <h1 className="singlePostTitle">
                   Lotem ipsum lorem ipsum sit amet.
                   <div className="singlePostEdit">
                   <i className="singlePostIcon fas fa-edit"></i>
                   <i className="singlePostIcon far fa-trash-alt"></i>
                   </div>
               </h1>
               <div className="singlePostInfo">
                   <span className="singlePostAuthor">Author: <b>DSasfd</b></span>
                   <span className="singlePostDate">1 Hour Ago</span>
               </div>
               <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos assumenda recusandae voluptatibus natus pariatur, quo esse in. Libero, nesciunt. Ducimus corporis minus, in blanditiis accusantium nostrum reprehenderit autem quo voluptatum sit debitis cumque, nemo est harum, itaque illo qui ipsa consectetur deleniti ea laboriosam dicta. Blanditiis sapiente quis architecto alias accusantium illo optio ab? A quaerat, excepturi eveniet in ea dolorum modi? Rerum pariatur nihil excepturi neque repellendus eos cumque iste necessitatibus hic, deleniti nemo nisi sed eum voluptate molestias voluptates nam sunt eveniet enim minima quo. Molestias voluptatem nostrum corrupti consectetur ipsa atque dolores doloribus. Dignissimos enim vero voluptates.</p>
           </div>
        </div>
    )
}
