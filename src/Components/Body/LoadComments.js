import React from 'react';
import dateFormat from 'dateformat';
const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return (

                <div key={comment.id}>
                    <hr />
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd,mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            );
        })
    );
}

export default LoadComments;