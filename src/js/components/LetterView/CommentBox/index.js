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
    this.setState({
      comments: this.props.comments
    })
  }

  submitComment (e) {
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
  }

  handleChange (e) {
    this.setState({
      commentBody: e.target.value
    })
  }

  render () {
    return (
      <div>
        <form>
          <FormGroup controlId='formControlsTextarea'>
            <ControlLabel>Give us any feedback concerning this letter</ControlLabel>
            <FormControl componentClass='textarea' placeholder='write your comments here' onChange={this.handleChange.bind(this)}/>
          </FormGroup>
          <Button bsStyle='info' type='submit' onClick={this.submitComment.bind(this)}>
            Submit
          </Button>
        </form>
        {this.state.comments.map((comment, i) => {
          return <CommentItem body={comment.body} author={comment.author} key={i} date={comment.date}/>
        })}
      </div>
    )
  }
}

CommentBox.propTypes = {
  comments: React.PropTypes.array
}

CommentBox.defaultProps = {
  comments: [
    {
      body: 'asdfashdfgkjashdfjkahsgdfjk',
      date: 'wed 13th march',
      author: 'brian'
    },
    {
      body: 'asdfashdfgkjashdfjkahsgdfjk',
      date: 'wed 13th march',
      author: 'fred'
    },
    {
      body: 'asdfashdfgkjashdfjkahsgdfjk',
      date: 'wed 13th march',
      author: 'fred'
    },
    {
      body: 'asdfashdfgkjashdfjkahsgdfjk',
      date: 'thur 14th march',
      author: 'sarah'
    }
  ]
}
