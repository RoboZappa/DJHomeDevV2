Vue.component("email-modal", {
  template: `<div class="modal-background">
    <div class="modal">
      <div class="social">
        <a href="https://www.facebook.com/officialdjwebdev"target="_blank">Facebook</a>
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
      this.$emit("eventname", false);
    },
    submitModal() {
      const data = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
      };
      this.$emit("event-submit", data);
    },
  },
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      showMenu: false,
      showModal: false,
      wasTouched: false,
      formSent: null,
    };
  },
  methods: {
    sendEmail(data) {
      const url = window.location.origin + "/email";
      axios.post(url, data).then((res) => {
      });
    },
    catchSubmit(emailData) {
      this.sendEmail(emailData);
    },
    updateparent(variable) {
      this.showModal = variable;
    },
    closeOut(element){
      var e = document.getElementById(element);
      e.style.display = "none";
    }
  },
});
