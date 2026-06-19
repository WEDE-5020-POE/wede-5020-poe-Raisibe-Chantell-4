console.log("JS Connected - WEDE5020 POE");

document.addEventListener('DOMContentLoaded', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    const idRegex = /^[0-9]{13}$/;

    // VOLUNTEER FORM
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll('#volunteerForm.error').forEach(span => span.textContent = '');

            const fields = {
                vFname: { value: document.getElementById('vFname').value.trim(), err: 'vFnameErr', msg: 'First name is required' },
                vSname: { value: document.getElementById('vSname').value.trim(), err: 'vSnameErr', msg: 'Surname is required' },
                vID: { value: document.getElementById('vID').value.trim(), err: 'vIDErr', msg: 'Enter 13-digit SA ID', regex: idRegex },
                vAge: { value: document.getElementById('vAge').value, err: 'vAgeErr', msg: 'Age must be 16-80', min: 16, max: 80 },
                vGender: { value: document.getElementById('vGender').value, err: 'vGenderErr', msg: 'Select gender' },
                vEmail: { value: document.getElementById('vEmail').value.trim(), err: 'vEmailErr', msg: 'Enter valid email', regex: emailRegex },
                vPhone: { value: document.getElementById('vPhone').value.replace(/\s/g, ''), err: 'vPhoneErr', msg: 'Enter valid SA number: 0821234567', regex: phoneRegex },
                vAddress: { value: document.getElementById('vAddress').value.trim(), err: 'vAddressErr', msg: 'Address is required' },
                vRole: { value: document.getElementById('vRole').value, err: 'vRoleErr', msg: 'Select a role' },
                vTime: { value: document.getElementById('vTime').value, err: 'vTimeErr', msg: 'Select availability' },
                vHours: { value: document.getElementById('vHours').value, err: 'vHoursErr', msg: 'Hours must be 1-40', min: 1, max: 40 },
                vStart: { value: document.getElementById('vStart').value, err: 'vStartErr', msg: 'Select start date' }
            };

            for (const key in fields) {
                const f = fields[key];
                if (f.value === '' || (f.regex &&!f.regex.test(f.value)) || (f.min && (f.value < f.min || f.value > f.max))) {
                    document.getElementById(f.err).textContent = f.msg;
                    isValid = false;
                }
            }

            if (isValid) {
                alert('Volunteer application submitted! We will contact you within 48 hours.');
                volunteerForm.reset();
            }
        });
    }

    // ENQUIRY FORM
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll('#enquiryForm.error').forEach(span => span.textContent = '');

            if (document.getElementById('eName').value.trim() === '') {
                document.getElementById('eNameErr').textContent = 'Name is required'; isValid = false;
            }
            if (!emailRegex.test(document.getElementById('eEmail').value)) {
                document.getElementById('eEmailErr').textContent = 'Enter valid email'; isValid = false;
            }
            const ePhone = document.getElementById('ePhone').value.replace(/\s/g, '');
            if (ePhone!== '' &&!phoneRegex.test(ePhone)) {
                document.getElementById('ePhoneErr').textContent = 'Enter valid SA number or leave blank'; isValid = false;
            }
            if (document.getElementById('eType').value === '') {
                document.getElementById('eTypeErr').textContent = 'Select enquiry type'; isValid = false;
            }
            if (document.getElementById('eMessage').value.trim().length < 10) {
                document.getElementById('eMessageErr').textContent = 'Message must be 10+ characters'; isValid = false;
            }

            if (isValid) {
                alert('Enquiry sent! We will reply within 24 hours.');
                enquiryForm.reset();
            }
        });
    }

    // CONTACT FORM
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll('#contactForm.error').forEach(span => span.textContent = '');

            if (document.getElementById('cName').value.trim() === '') {
                document.getElementById('cNameErr').textContent = 'Name is required'; isValid = false;
            }
            if (!emailRegex.test(document.getElementById('cEmail').value)) {
                document.getElementById('cEmailErr').textContent = 'Enter valid email'; isValid = false;
            }
            if (document.getElementById('cSubject').value.trim() === '') {
                document.getElementById('cSubjectErr').textContent = 'Subject is required'; isValid = false;
            }
            if (document.getElementById('cDept').value === '') {
                document.getElementById('cDeptErr').textContent = 'Select department'; isValid = false;
            }
            if (document.getElementById('cUrgency').value === '') {
                document.getElementById('cUrgencyErr').textContent = 'Select urgency'; isValid = false;
            }
            if (document.getElementById('cMessage').value.trim() === '') {
                document.getElementById('cMessageErr').textContent = 'Message is required'; isValid = false;
            }

            if (isValid) {
                alert('Message sent! Thank you for contacting us.');
                contactForm.reset();
            }
        });
    }
}); 