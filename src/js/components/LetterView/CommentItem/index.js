import React from 'react'

export default class CommentItem extends React.Component {
    render () {
        return (
            <div className='commentItem'>
            <h5> {this.props.author}</h5>
            <p> {(this.props.date).toString().substring(0, 21)} </p>
            <p> {this.props.body} </p>
            </div>
            )
    }
}