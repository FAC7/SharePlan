import React from 'react'
import {Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import CommentItem from '../CommentItem/index.js'

export default class CommentBox extends React.Component {
  constructor () {
    super()
    this.state = {
      commentBody: '',
      comments: []
    }
  }
    componentWillMount () {
        this.setState ({
            comments: this.props.comments
        })
    }
    
    // submit comment stores the comment in state and sends an axios post request to the database
    submitComment(e) {
        e.preventDefault()
        const comment = {
            body: this.state.commentBody,
            author: 'currentUser',
            date: new Date()
        }
        const commentList = this.state.comments
        commentList.unshift(comment)
        this.setState({
            comments: commentList
        })
        // post request goes here
    }
    
    // handleChange stores all the changes in the textarea in state so that when you submit 
    // you just have to grab the changes that are stored in state 
    handleChange (e) {
        this.setState({
            commentBody: e.target.value
        })
    }
    
    render () {
        return (
            <div>
                
                    <form>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Give us any feedback concerning this letter</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="write your comments here" onChange={this.handleChange.bind(this)}/>
                        </FormGroup>
                        <Button bsStyle='info' type="submit" onClick={this.submitComment.bind(this)}>
                            Submit
                        </Button>
                    </form>
                    {this.state.comments.map((comment, i)=> {
                        return <CommentItem body={comment.body} author={comment.author} key={i} date={comment.date}/>
                    })}
            </div>
        )
    }
}
