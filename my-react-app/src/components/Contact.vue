<template>
  <div class="contact-container">
    <form ref="formRef" class="formContainer" @submit.prevent="sendEmail">
      <h2>Want to get in touch?</h2>
      <p>Did you find anything interesting here? Want to do a collab or hire me for a job? Please send me a message and I'll reply to you as fast as I can. Can't wait to here from you! ☺️</p>
      <p id="move-right">Sincerely,<br>
        Caroline<br>
      </p>

      <div class="formElement">
        <label for="from_name">Name:</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="ex. Anna Andersson"
          required
        />
      </div>

      <div class="formElement">
        <label for="from_email">E-mail:</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          placeholder="ex. anna@gma..."
          required
        />
      </div>

      <div class="formElement">
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="30"
          placeholder="Your message here.."
          required
        ></textarea>
      </div>

      <button type="submit" class="formButton">
        {{ isSending ? "Sending..." : "Submit" }}
      </button>

      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const serviceID = 'service_q1c1k1u'
const templateID = 'template_cpf6nlh'
const publicKey = 'zuxuHPqG2-_rU1ILe'

const formRef = ref(null)
const isSending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const sendEmail = () => {
  isSending.value = true
  successMessage.value = ''
  errorMessage.value = ''

  emailjs
    .sendForm(serviceID, templateID, formRef.value, publicKey)
    .then(
      () => {
        successMessage.value = '✅ Thanks for your message!'
        formRef.value.reset()
      },
      (error) => {
        console.error('FAILED...', error)
        errorMessage.value = '❌ Sorry, something went wrong! Please try again.'
      }
    )
    .finally(() => {
      isSending.value = false
    })
}
</script>

<style scoped>
.contact-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 2rem;
}

.formContainer {
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.formContainer:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
}

h2 {
  font-size: 1.8rem;
  color: #101010;
  text-align: center;
  margin-bottom: 0.5rem;
}

p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 0.1rem;
}

#move-right {
text-align: center;
}


.formElement {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

label {
  font-weight: 600;
  color: #222;
  font-size: 0.9rem;
}

input,
textarea {
  padding: 0.5rem 1rem;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-size: 0.8rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus {
  border-color: #fafafa;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

textarea {
  resize: none;
}

.formButton {
  align-self: center;
  background: #007bff;
  color: white;
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.formButton:hover {
  background: #56a8ff;
  transform: translateY(2px);
}

.success-message {
  color: #28a745;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
}

.error-message {
  color: #dc3545;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
}

@media (max-width: 600px) {
  .formContainer {
    padding: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>