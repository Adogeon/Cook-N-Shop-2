import { reactive, readonly, computed } from "vue";

const state = reactive({
  token: "",
  error: null
});

const signIn = async (email, password) => {
  try {
    state.token = await Promise.resolve(
      `token string go here for email ${email} and ${password}`
    );
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

const signOut = () => {
  state.token = "";
  state.error = null;
};

const isSignIn = computed(() => state.token !== "");

export default {
  ...readonly(state),
  isSignIn,
  signIn,
  signUp,
  signOut
};