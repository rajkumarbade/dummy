import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Stack from "@mui/material/Stack";
import RenderTextField from "../components/RenderTextField";
import RenderButton from "../components/RenderButton";
import { shouldError } from "../utilities/validators/formFields";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (state) => {
  return {};
};

const LoginComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={4}>
          <div>
            <Field
              name="firstName"
              component={RenderTextField}
              type="text"
              label="First Name"
            />
          </div>
          <div>
            <Field
              name="lastName"
              component={RenderTextField}
              type="text"
              label="Last Name"
            />
          </div>
        </Stack>
        <Stack direction="row" spacing={4}>
          <div>
            <Field
              name="email"
              component={RenderTextField}
              type="email"
              label="Email"
            />
          </div>
          <div>
            <Field
              name="password"
              component={RenderTextField}
              type="password"
              label="Password"
            />
          </div>
        </Stack>
        <div>
          <RenderButton type="submit">Submit</RenderButton>
        </div>
      </Stack>
    </form>
  );
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "LoginScreen",
    validate: shouldError
  })(LoginComponent)
);

export default Login;
