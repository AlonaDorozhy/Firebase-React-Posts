import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      post: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    database.push(post);
    this.setState({
      title: '',
      body: '',
      post: ''
    })
  }

  componentDidMount() {
    database.on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      });
    });
  }
  renderPosts() {
    return _.map(this.state.posts, (post, key) => {
      return (
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <form className='subForm' onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.onInputChange}
              // onChange={e => {
              //   this.setState({ title: e.target.value });
              // }}
              ref="title"
              className="form-control"
            />
            <input
              value={this.state.body}
              type="text"
              name="body"
              placeholder="Body"
              onChange={this.onInputChange}
              // onChange={e => {
              //   this.setState({ title: e.target.value });
              // }}
              ref="body"
              className="form-control"
            />
          </div>
          <div className="form-group">
            {this.state.body}
            {/* <ReactQuill
              modules={App.modules}
              formats={App.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onHandleChange}
            /> */}
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
        <br />
        <div>
        {this.renderPosts()}</div>
      </div>
    );
  }
}

export default App;