import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
//import Button from "react-bootstrap/Button";
import {
  Button,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Input
} from "reactstrap";
import MyInput from "./Input";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { title, body } = this.state;
    let post = {
      title,
      body
    };

    this.props.createPost(post);
    /* const { data } = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
        post 
    ); */
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <div>
              <h1>Add Post</h1>
              <Form className="postForm" onSubmit={this.onSubmit}>
                <FormGroup>
                  <div>
                    <label>Title: </label>
                    <br />
                  </div>
                  <MyInput
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                  />
                </FormGroup>
                <FormGroup>
                  <div>
                    <label>Body: </label>
                    <br />
                    <Input
                      type="textarea"
                      name="body"
                      onChange={this.onChange}
                      value={this.state.body}
                    />
                  </div>
                </FormGroup>
                <Button outline color="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

/* const mapStateToProps = state => ({
  posts: state.posts.item,
  newPost: state.posts.item
}); */

export default connect(
  null,
  { createPost }
)(PostForm);
