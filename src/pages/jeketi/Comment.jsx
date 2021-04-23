import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card } from 'reactstrap';

export default function Comment({roomId}) {
  const [comment, setComment] = useState([{
    name: 'Minzoid ',
    comment: 'Tunggu wots',
    avatar_url: "https://image.showroom-cdn.com/showroom-prod/image/avatar/1036557.png?v=87"
  }]);

  useEffect(() => {
    axios.get(`/comment_log?room_id=${roomId}`).then(res => {
      const comments = res.data.comment_log
      setComment(comments)
    });
  }, [comment]);

  return (
    <Card body inverse color="dark">
      {comment.map((item, idx) => (
        item.comment.length != '2' && item.comment.length != '1' && (
          <>
          {console.log(item.comment.length)}
            <h5 key={idx}>
              <img width="30" className="mr-1" src={item.avatar_url} />
              {item.name}
            </h5>
            <p>{item.comment}</p>
            <hr/>
          </>
        )
      ))}
    </Card>
  )
}
