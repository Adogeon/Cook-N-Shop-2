<template>
  <div
    class="modal fade"
    id="signInModal"
    aria-labelledby="signInModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content ">
        <div class="modal-header">
          <h5
            v-if="modeView === 'sign-up'"
            class="modal-title"
            id="signInModalLabel"
          >
            Sign Up
          </h5>
          <h5
            v-else-if="modeView === 'sign-in'"
            class="modal-title"
            id="signInModalLabel"
          >
            Sign In
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div v-if="modeView === 'sign-up'" class="mb-3">
              <label for="username-input" class="col-form-label">
                Username:
              </label>
              <input type="text" class="form-control" id="username-input" />
            </div>
            <div class="mb-3">
              <label for="email-input" class="col-form-label">
                Email:
              </label>
              <input type="email" class="form-control" id="email-input" />
            </div>
            <div class="mb-3">
              <label for="password-input" class="col-form-label"
                >Password:
              </label>
              <input type="password" class="form-control" id="password-input" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

export default {
  name: "SignInModal",
  props: {
    mode: {
      type: String,
      default: "sign-in",
      validator: function(value) {
        return ["sign-in", "sign-up"].indexOf(value) !== -1;
      }
    }
  },
  setup(props) {
    const email = ref(null);
    const password = ref(null);
    const username = ref(null);
    const modeView = ref(props.mode);
    const loading = ref(false);

    const { signIn, error } = inject("auth");
    const signInUser = async () => {
      loading.value = true;
      await signIn(email, password);
      loading.value = false;
    };
    /*const signUpUser = async () => {
      loading.value = true;
      await signUp(username, email, password);
      loading.value = false;
    };*/

    return {
      signInUser,
      error,
      email,
      password,
      username,
      modeView
    };
  }
};
</script>
