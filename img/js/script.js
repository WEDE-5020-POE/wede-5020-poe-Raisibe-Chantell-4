// WEDE5020 Part 3 - AJAX Volunteer Form Submission
const volunteerForm = document.getElementById('volunteerForm');

if (volunteerForm) {
  volunteerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('volunteerBtn');
    const status = document.getElementById('volunteerStatus');
    let valid = true;
    
    // Clear old errors
    document.querySelectorAll('#volunteerForm .error').forEach(el => el.textContent = '');
    
    // Get values
    const fname = document.getElementById('vFname').value.trim();
    const sname = document.getElementById('vSname').value.trim();
    const email = document.getElementById('vEmail').value.trim();
    const phone = document.getElementById('vPhone').value.trim();
    const role = document.getElementById('vRole').value;
    const time = document.getElementById('vTime').value;
    const comment = document.getElementById('vComment').value.trim();
    
    // Validation
    if (fname === '') { document.getElementById('vFnameErr').textContent = 'First name required'; valid = false; }
    if (sname === '') { document.getElementById('vSnameErr').textContent = 'Surname required'; valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { 
      document.getElementById('vEmailErr').textContent = 'Valid email required'; valid = false; 
    }
    if (!/^0[6-8][0-9]{8}$/.test(phone.replace(/\s/g, ''))) { 
      document.getElementById('vPhoneErr').textContent = 'Enter valid SA number: 0821234567'; valid = false; 
    }
    if (role === '') { document.getElementById('vRoleErr').textContent = 'Select a volunteer role'; valid = false; }
    if (time === '') { document.getElementById('vTimeErr').textContent = 'Select availability'; valid = false; }
    if (comment.length < 20) { 
      document.getElementById('vCommentErr').textContent = 'Please write at least 20 characters'; valid = false; 
    }
    
    if (!valid) return;
    
    // Submit via AJAX
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    status.innerHTML = '';
    
    const formData = new FormData(this);
    
    try {
      // Create a NEW form on Formspree for volunteers
      const response = await fetch('https://formspree.io/f/YOUR_VOLUNTEER_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        status.innerHTML = '<p class="success">Thank you! Your volunteer application was sent. RMHC will contact you within 3 business days.</p>';
        this.reset();
      } else {
        status.innerHTML = '<p class="error">Error sending application. Please try again.</p>';
      }
    } catch (error) {
      status.innerHTML = '<p class="error">Network error. Check your connection.</p>';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Volunteer Application';
    }
 // WEDE5020 Part 3 - AJAX Enquiry Form Submission
const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('enquiryBtn');
    const status = document.getElementById('enquiryStatus');
    let valid = true;
    
    document.querySelectorAll('#enquiryForm .error').forEach(el => el.textContent = '');
    
    const fname = document.getElementById('eFname').value.trim();
    const surname = document.getElementById('eSurname').value.trim();
    const email = document.getElementById('eEmail').value.trim();
    const phone = document.getElementById('ePhone').value.trim();
    const type = document.getElementById('eType').value;
    const subject = document.getElementById('eSubject').value.trim();
    const msg = document.getElementById('eMessage').value.trim();
    
    if (fname === '') { document.getElementById('eFnameErr').textContent = 'First name required'; valid = false; }
    if (surname === '') { document.getElementById('eSurnameErr').textContent = 'Surname required'; valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('eEmailErr').textContent = 'Valid email required'; valid = false; }
    if (phone !== '' && !/^0[6-8][0-9]{8}$/.test(phone.replace(/\s/g, ''))) { 
      document.getElementById('ePhoneErr').textContent = 'Enter valid SA number'; valid = false; 
    }
    if (type === '') { document.getElementById('eTypeErr').textContent = 'Select enquiry type'; valid = false; }
    if (subject === '') { document.getElementById('eSubjectErr').textContent = 'Subject required'; valid = false; }
    if (msg.length < 10) { document.getElementById('eMsgErr').textContent = 'Message must be at least 10 characters'; valid = false; }
    
    if (!valid) return;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    status.innerHTML = '';
    
    const formData = new FormData(this);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_ENQUIRY_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        status.innerHTML = '<p class="success">Thank you! Your enquiry has been sent. RMHC will respond within 2 business days.</p>';
        this.reset();
      } else {
        status.innerHTML = '<p class="error">Error sending enquiry. Please try again.</p>';
      }
    } catch (error) {
      status.innerHTML = '<p class="error">Network error. Please check your connection.</p>';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Enquiry';
    }
  });
} });
}
