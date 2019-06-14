import React, { Component } from "react";
import MyInput from "./Input";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  NavLink
} from "reactstrap";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    let post = {
      title,
      body
    };
    //window.location = "/";

    // from postActions.js
    this.props.createPost(post);
    this.toggle();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <NavLink color="dark" onClick={this.toggle}>
          Add Post
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="modalHead" toggle={this.toggle}>
            New Post- {user.name}
          </ModalHeader>

          <ModalBody>
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostForm);
