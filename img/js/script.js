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
document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous error messages
        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        let isValid = true;

        // Full Name
        const name = document.getElementById("eName").value.trim();
        if (name === "") {
            document.getElementById("eNameErr").textContent =
                "Please enter your full name.";
            isValid = false;
        }

        // Email Address
        const email = document.getElementById("eEmail").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            document.getElementById("eEmailErr").textContent =
                "Please enter a valid email address.";
            isValid = false;
        }

        // Phone Number (optional, but if entered must be 10 digits)
        const phone = document.getElementById("ePhone").value.trim();

        if (phone !== "" && !/^\d{10}$/.test(phone)) {
            document.getElementById("ePhoneErr").textContent =
                "Phone number must contain 10 digits.";
            isValid = false;
        }

        // Enquiry Type
        const type = document.getElementById("eType").value;

        if (type === "") {
            document.getElementById("eTypeErr").textContent =
                "Please select an enquiry type.";
            isValid = false;
        }

        // Message (minimum 10 characters)
        const message = document.getElementById("eMessage").value.trim();

        if (message.length < 10) {
            document.getElementById("eMessageErr").textContent =
                "Message must contain at least 10 characters.";
            isValid = false;
        }

        // Success
        if (isValid) {
            alert("Your enquiry has been sent successfully!");
            enquiryForm.reset();
        }

    });

});
    // CONTACT FORM
    document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous errors
        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        let valid = true;

        // Full Name
        const name = document.getElementById("cName").value.trim();
        if (name === "") {
            document.getElementById("cNameErr").textContent =
                "Please enter your full name.";
            valid = false;
        }

        // Email
        const email = document.getElementById("cEmail").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            document.getElementById("cEmailErr").textContent =
                "Please enter a valid email address.";
            valid = false;
        }

        // Subject
        const subject = document.getElementById("cSubject").value.trim();
        if (subject === "") {
            document.getElementById("cSubjectErr").textContent =
                "Please enter a subject.";
            valid = false;
        }

        // Department
        const dept = document.getElementById("cDept").value;
        if (dept === "") {
            document.getElementById("cDeptErr").textContent =
                "Please select a department.";
            valid = false;
        }

        // Urgency
        const urgency = document.getElementById("cUrgency").value;
        if (urgency === "") {
            document.getElementById("cUrgencyErr").textContent =
                "Please select an urgency level.";
            valid = false;
        }

        // Message
        const message = document.getElementById("cMessage").value.trim();
        if (message === "") {
            document.getElementById("cMessageErr").textContent =
                "Please enter your message.";
            valid = false;
        }

        // If all fields are valid
        if (valid) {
            alert("Your message has been sent successfully!");
            contactForm.reset();
        }

    });

});
}); 