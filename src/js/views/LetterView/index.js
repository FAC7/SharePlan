import React from 'react'
import CommentBox from '../../components/LetterView/CommentBox/index.js'
import { Row, Col } from 'react-flexbox-grid'

export default class LetterView extends React.Component {
    constructor () {
        super()
        this.state = {
            comments: [],
            getComments: this.getComments.bind(this)
        }
    }
    componentWillMount () {
        this.setState({
            comments: this.getComments()
        })
    }
    getComments () {
        // this function will send an axios request to get the comments and feedback on the letter and return 
        // an array of comments. 
        return this.props.comments
    }
    render () {
        return (
            <Row>
                <Col xs={6} xsOffset={1}> 
                    <iframe 
                        src={this.props.pdfURL} 
                        title="your_title" 
                        align="top" 
                        height="620" 
                        width="100%" 
                        frameborder="0" 
                        scrolling="auto" 
                        target="Message"> 
                    </iframe>
                </Col>
                <Col xs={4}>
                    <CommentBox comments={this.state.comments} currentUser={this.props.currentUser}/>
                </Col>
            </Row>
            )
    }
}

LetterView.propTypes = {
    pdfURL: React.PropTypes.string,
    comments: React.PropTypes.array,
    currentUser: React.PropTypes.string
}

LetterView.defaultProps = {
    currentUser: 'katbow',
    pdfURL: 'img/sample.pdf',
     comments: [
            {
                body: 'asdfashdfgkjashdfjkahsgdfjk',
                date: 'wed 13th march',
                author: 'brian'
            },{
                body: 'asdfashdfgkjashdfjkahsgdfjk',
                date: 'wed 13th march',
                author: 'fred'
            },{
                body: 'asdfashdfgkjashdfjkahsgdfjk',
                date: 'wed 13th march',
                author: 'fred'
            },{
                body: 'asdfashdfgkjashdfjkahsgdfjk',
                date: 'thur 14th march',
                author: 'sarah'
            }
        ]
}
