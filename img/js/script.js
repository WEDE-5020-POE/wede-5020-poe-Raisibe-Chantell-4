console.log("JS Connected");

document.addEventListener('DOMContentLoaded', function() {
    
    // VOLUNTEER FORM - about.html
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        console.log("Volunteer form found");
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll('#volunteerForm .error').forEach(span => span.textContent = '');

            const fname = document.getElementById('vFname');
            const sname = document.getElementById('vSname');
            const email = document.getElementById('vEmail');
            const phone = document.getElementById('vPhone');
            const age = document.getElementById('vAge');
            const role = document.getElementById('vRole');
            const time = document.getElementById('vTime');
            const hours = document.getElementById('vHours');

            if (fname.value.trim() === '') {
                document.getElementById('vFnameErr').textContent = 'First name is required';
                isValid = false;
            }
            if (sname.value.trim() === '') {
                document.getElementById('vSnameErr').textContent = 'Surname is required';
                isValid = false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('vEmailErr').textContent = 'Enter a valid email';
                isValid = false;
            }
            if (!/^(\+27|0)[6-8][0-9]{8}$/.test(phone.value.replace(/\s/g, ''))) {
                document.getElementById('vPhoneErr').textContent = 'Enter valid SA number: 0821234567';
                isValid = false;
            }
            if (age.value < 16 || age.value > 80 || age.value === '') {
                document.getElementById('vAgeErr').textContent = 'Age must be 16-80';
                isValid = false;
            }
            if (role.value === '') {
                document.getElementById('vRoleErr').textContent = 'Please select a role';
                isValid = false;
            }
            if (time.value === '') {
                document.getElementById('vTimeErr').textContent = 'Please select availability';
                isValid = false;
            }
            if (hours.value < 1 || hours.value > 40 || hours.value === '') {
                document.getElementById('vHoursErr').textContent = 'Hours must be 1-40';
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for volunteering! We will contact you soon.');
                volunteerForm.reset();
            }
        });
    }

    // ENQUIRY FORM - enquiry.html
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        console.log("Enquiry form found");
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll('#enquiryForm .error').forEach(span => span.textContent = '');

            const name = document.getElementById('eName');
            const email = document.getElementById('eEmail');
            const phone = document.getElementById('ePhone');
            const type = document.getElementById('eType');
            const message = document.getElementById('eMessage');

            if (name.value.trim() === '') {
                document.getElementById('eNameErr').textContent = 'Name is required';
                isValid = false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('eEmailErr').textContent = 'Enter a valid email';
                isValid = false;
            }
            if (phone.value !== '' && !/^(\+27|0)[6-8][0-9]{8}$/.test(phone.value.replace(/\s/g, ''))) {
                document.getElementById('ePhoneErr').textContent = 'Enter valid SA number or leave blank';
                isValid = false;
            }
            if (type.value === '') {
                document.getElementById('eTypeErr').textContent = 'Please select enquiry type';
                isValid = false;
            }
            if (message.value.trim().length < 10) {
                document.getElementById('eMessageErr').textContent = 'Message must be 10+ characters';
                isValid = false;
            }

            if (isValid) {
                alert('Enquiry sent! We will reply within 24 hours.');
                enquiryForm.reset();
            }
        });
    }

    // CONTACT FORM - contact.html
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        console.log("Contact form found");
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll('#contactForm .error').forEach(span => span.textContent = '');

            const name = document.getElementById('cName');
            const email = document.getElementById('cEmail');
            const subject = document.getElementById('cSubject');
            const urgency = document.getElementById('cUrgency');
            const message = document.getElementById('cMessage');

            if (name.value.trim() === '') {
                document.getElementById('cNameErr').textContent = 'Name is required';
                isValid = false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('cEmailErr').textContent = 'Enter a valid email';
                isValid = false;
            }
            if (subject.value.trim() === '') {
                document.getElementById('cSubjectErr').textContent = 'Subject is required';
                isValid = false;
            }
            if (urgency.value === '') {
                document.getElementById('cUrgencyErr').textContent = 'Please select urgency level';
                isValid = false;
            }
            if (message.value.trim() === '') {
                document.getElementById('cMessageErr').textContent = 'Message is required';
                isValid = false;
            }

            if (isValid) {
                alert('Message sent! Thank you for contacting us.');
                contactForm.reset();
            }
        });
    }
});