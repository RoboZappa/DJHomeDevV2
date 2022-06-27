Vue.component("email-modal", {
  props: ["email", "name", "message"],
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
                    onclick="submitForm(email)"
                  >
                    SUBMIT
                  </button>
                  <button type="button" id="close" @click="modal = false">
                    CLOSE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});


function sendEmail(email, name, message) {
  const response = axios.post(window.location.href + 'email', email, name, message);
  console.log(response);
}

var app = new Vue({
  el: "#app",
  data: {
    hovering: false,
    modal: false
  },
  methods: {
    
  },
});
