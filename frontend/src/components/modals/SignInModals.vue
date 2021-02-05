<template>
  <div ckass="modal fade" id="signInModal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-cotent">
        <div class="modal-header">
          <h5 class="modal-title" id="signInModalLabel">
            <p v-if="modeView === 'sign-up'">
              Sign Up
            </p>
            <p v-else-if="modeView === 'sign-in'">
              Sign In
            </p>
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
    const loading = false;

    const { signIn, isSignIn, error } = inject("auth");
    const signInUser = async () => {
      loading.value = true;
      await signIn(email, password);
    };

    return {
      signInUser,
      isSignIn,
      error,
      email,
      password,
      username,
      modeView
    };
  }
};
</script>
