// WEDE5020 Part 3 - AJAX Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const status = document.getElementById('formStatus');
      let valid = true;
      
      // Clear old errors
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
      
      // Get form values
      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const type = document.getElementById('msgType').value;
      const msg = document.getElementById('cMessage').value.trim();
      
      // Validation - matches rubric 4.1
      if (name === '') { 
        document.getElementById('cNameErr').textContent = 'Name required'; 
        valid = false; 
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
        document.getElementById('cEmailErr').textContent = 'Valid email required'; 
        valid = false; 
      }
      if (type === '') { 
        document.getElementById('cTypeErr').textContent = 'Select message type'; 
        valid = false; 
      }
      if (msg.length < 10) { 
        document.getElementById('cMsgErr').textContent = 'Message must be at least 10 characters'; 
        valid = false; 
      }
      
      if (!valid) return;
      
      // AJAX submit starts here
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      status.innerHTML = '';
      
      const formData = new FormData(this);
      
      try {
        // IMPORTANT: Replace YOUR_ENDPOINT with your Formspree URL
        const response = await fetch('https://formspree.io/f/YOUR_ENDPOINT', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          status.innerHTML = '<p class="success">Message sent successfully! We will contact you soon.</p>';
          this.reset();
        } else {
          status.innerHTML = '<p class="error">Oops, there was an error. Please try again.</p>';
        }
      } catch (error) {
        status.innerHTML = '<p class="error">Network error. Please check your connection.</p>';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }
});