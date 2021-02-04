<template>
  <div ckass="modal fade" id="signInModal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-cotent">
        <div class="modal-header">
          <h5 class="modal-title" id="signInModalLabel">Sign In</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="email-input" class="col-form-label">Email:</label>
              <input type="email" class="form-control" id="email-input" />
            </div>
            <div class="mb-3">
              <label for="password-input" class="col-form-label"
                >Password:</label
              >
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
          <button type="button" class="btn btn-primary">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

export default {
  name: "SignInModal",
  setup() {
    const email = ref("");
    const password = ref("");

    const { signIn, isSignIn, error } = inject("auth");
    const signInUser = async () => {
      await signIn(email, password);
    };

    return {
      signInUser,
      isSignIn,
      error,
      email,
      password
    };
  }
};
</script>
