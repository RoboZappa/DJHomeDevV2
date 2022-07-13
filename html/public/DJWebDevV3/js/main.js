Vue.component("email-modal", {
  template: `<div class="modal-background">
    <div class="modal">
      <div class="social">
        <a href="http://www.facebook.com/officialdjwebdev"target="_blank">Facebook</a>
        <a href="https://www.instagram.com/officialdjwebdev" target="_blank">Instagram</a>
      </div>
      <div class="contactForm">
        <div class="formName">
          <label for="name">Name:</label><br>
          <input class="u-full-width" type="text" id="name" placeholder="Bob Sacamano"/>  
        </div>
        <div class="formEmail">
          <label for="email">Email:</label><br>
          <input class="u-full-width" type="text" id="email" placeholder="bob@gmail.com"/>
        </div>
        <div class="formMessage">
          <label for="message">Message:</label><br>
          <textarea class="u-full-width" placeholder="Message..." id="message"></textarea>
        </div>
        <div class="formButtons">
          <button @click="submitModal()">SUBMIT</button>
          <button type="button" id="close" @click="closeModal">CLOSE</button>
        </div>
      </div>
      <div class="modalLogo">
        <h3>_DJ<br>Web<br>Dev</h3>
      </div>
    </div>
  </div>`,
  methods: {
    closeModal() {
      console.log("closeDialog");
      this.$emit("eventname", false);
    },
    submitModal() {
      console.log("submitModal");
      const data = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        message: document.getElementById('message').value,
      };
      console.log("submitModal", data);
      this.$emit("event-submit", data);
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
    catchSubmit(emailData) {
      console.log("catchSubmit");
      this.sendEmail(emailData);
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
