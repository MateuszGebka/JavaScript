    const form      = document.getElementById('contactForm');
    const nameIn    = document.getElementById('name');
    const emailIn   = document.getElementById('email');
    const messageIn = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('formStatus');

    const errors = {
      name:    document.getElementById('nameError'),
      email:   document.getElementById('emailError'),
      message: document.getElementById('messageError'),
    };

    function validateName(){
        const v = nameIn.value.trim();
        if (v.length < 2) {
            errors.name.textContent = `at least 2 char`;
            return false;
        }
        errors.name.textContent = '';
        return true;
    }

        function validateEmail() {
      const v = emailIn.value.trim();
      // simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(v)) {
        errors.email.textContent = 'Enter a valid email address.';
        return false;
      }
      errors.email.textContent = '';
      return true;
    }

        function validateMessage() {
      const v = messageIn.value.trim();
      if (v.length < 10) {
        errors.message.textContent = 'Message must be at least 10 characters.';
        return false;
      }
      errors.message.textContent = '';
      return true;
    }

    function updateSubmitState(){
        const ok = validateName() && validateEmail() 
        && validateMessage;
        submitBtn.disabled = !ok;
    }