import { reactive, readonly, computed } from "vue";

const state = reactive({
  token: "",
  error: null
});

const signIn = async (email, password) => {
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

const signUp = async (username, email, password) => {
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

const isSignIn = computed(() => state.token !== "");

export default {
  ...readonly(state),
  isSignIn,
  signIn,
  signUp
};
