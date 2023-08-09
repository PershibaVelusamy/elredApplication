import React from 'react'

export const Commands=(props)=> {
    const {commentList}=props;
    console.log(props)
  return (
    <>
       {commentList?.map((comment)=>{
        return(
            <>
              <div className='commentMain'>

<img className='commentImg' src={comment.ProfileImg} alt="Gwen" />
<div className='CommentText'>
  <span className='addWeight'>
   {comment.name}
  </span>&nbsp;
  {comment.comment}
</div>

</div>
<p className='timestamp'><span className='seconds'>{comment.time}
</span><span>{` ${comment.likes} likes` }</span></p>
            </>
        )
       })
       
     }
    </>
  )
}
