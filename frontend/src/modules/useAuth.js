import { reactive, readonly } from "vue";

const state = reactive({
  token: "",
  error: {}
});

const login = async (email, password) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: {
        email,
        password
      }
    });
    const data = response.json();
    state.token = data.token;
  } catch (error) {
    state.error = error;
  }
};

const signup = async (username, email, password) => {
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: {
        username,
        email,
        password
      }
    });
    const data = response.json();
    state.token = data.token;
  } catch (error) {
    state.error = error;
  }
};

export default {
  ...readonly(state),
  login,
  signup
};
