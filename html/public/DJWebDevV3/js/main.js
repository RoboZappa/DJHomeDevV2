Vue.component("email-modal", {
  template: 
  `<div class="modal-background">
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
          <button type="submit" value="Submit" onclick="submitForm(email)">SUBMIT</button>
          <button v-bind:modal="false" v-on:input="modal=$event.target.value" type="button" id="close">CLOSE</button>
        </div>
      </div>
      <div class="modalLogo">
        <h3>_DJ<br>Web<br>Dev</h3>
      </div>
    </div>
  </div>`
  ,props:["modal"]
});


var app = new Vue({
  el: "#app",
  data: {
    hovering: false,
    modal: false
  },
  methods: {
    sendEmail(email, name, message) {
      const url = window.location.origin + '/email';
      const data = {
        email: email,
        name: name,
        message: message
      }
      console.log('url', url);
      const response = axios.post(url, data);
    }
  },
});
