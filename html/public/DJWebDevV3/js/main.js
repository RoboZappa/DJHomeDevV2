Vue.component("email-modal", {
  template: `<div class="modal-background">
    <div class="modal">
      <div id="contact">
        <div id="formModal">
          <div class="social">
            <ul>
              <li>
                <a
                  href="http://www.facebook.com/officialdjwebdev"
                  target="_blank"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://www.instagram.com/officialdjwebdev"
                  target="_blank"
                  >Instagram</a
                >
              </li>
            </ul>
          </div>
          <div class="container">
            <div id="form">
              <form id="contactForm">
                <label for="name">Name:</label>
                <input
                  class="u-full-width"
                  type="text"
                  id="name"
                  placeholder="Bob Sacamano"
                />
                <label for="email">Email:</label>
                <input
                  class="u-full-width"
                  type="text"
                  id="email"
                  placeholder="bob@gmail.com"
                />
                <label for="message">Message:</label>
                <textarea
                  class="u-full-width"
                  placeholder="Message..."
                  id="message"
                ></textarea>
                <div class="formButtons">
                  <button
                    type="submit"
                    value="Submit"
                    @click="submitModal(email.value, name.value, message.value)"
                  >
                    SUBMIT
                  </button>
                  <button type="button" id="close" @click="closeModal">
                    CLOSE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  methods: {
    closeModal() {
      console.log("closeDialog");
      this.$emit("eventname", false);
    },
    submitModal(email, name, message) {
      event.preventDefault();
      console.log('submitModal');
      const data = {
        email: email,
        name: name,
        message: message,
      };
      console.log("submitModal", data);
      this.$emit("eventSubmit", data);
    },
  },
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      isHovering: false,
      showModal: false,
    };
  },
  methods: {
    sendEmail(data) {
      const url = window.location.origin + "/email";
      console.log("url", url);
      axios.post(url, data);
    },
    catchSubmit(variable) {
      sendEmail(variable);
    },
    updateparent(variable) {
      console.log("updateParent: ", variable);
      this.showModal = variable;
    },
    // showModal() {
    //   this.modal = this.modal ? false : true;
    // },
  },
});
