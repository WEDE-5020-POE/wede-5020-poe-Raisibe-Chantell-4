```javascript
console.log("JS Connected - WEDE5020 POE");

document.addEventListener("DOMContentLoaded", function () {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    const idRegex = /^[0-9]{13}$/;
}
```
// ======================
// volunteer form
// ======================
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous errors
        document.querySelectorAll("#contactForm .error").forEach(error => {
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

        // Email Address
        const email = document.getElementById("cEmail").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            document.getElementById("cEmailErr").textContent =
                "Please enter a valid email address.";
            valid = false;
        }

        // Contact Number (optional)
        const phone = document.getElementById("cPhone").value.trim();

        if (phone !== "" && !/^\d{10}$/.test(phone)) {
            document.getElementById("cPhoneErr").textContent =
                "Phone number must contain 10 digits.";
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
        const department = document.getElementById("cDept").value;

        if (department === "") {
            document.getElementById("cDeptErr").textContent =
                "Please select a department.";
            valid = false;
        }

        // Urgency Level
        const urgency = document.getElementById("cUrgency").value;

        if (urgency === "") {
            document.getElementById("cUrgencyErr").textContent =
                "Please select an urgency level.";
            valid = false;
        }

        // Message
        const message = document.getElementById("cMessage").value.trim();

        if (message.length < 10) {
            document.getElementById("cMessageErr").textContent =
                "Message must contain at least 10 characters.";
            valid = false;
        }

        // Successful submission
        if (valid) {
            alert("Your message has been sent successfully!");
            contactForm.reset();
        }

    });

}
```     
// ======================
// ENQUIRY FORM
// ======================
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous error messages
        document.querySelectorAll("#enquiryForm .error").forEach(error => {
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

        // Phone Number (optional)
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

        // Message
        const message = document.getElementById("eMessage").value.trim();

        if (message.length < 10) {
            document.getElementById("eMessageErr").textContent =
                "Message must contain at least 10 characters.";
            isValid = false;
        }

        // Successful submission
        if (isValid) {
            alert("Your enquiry has been sent successfully!");
            enquiryForm.reset();
        }

    });

}
```


    
// ======================
// CONTACT FORM
// ======================
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Clear previous error messages
        document.querySelectorAll("#contactForm .error").forEach(error => {
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

        // Email Address
        const email = document.getElementById("cEmail").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            document.getElementById("cEmailErr").textContent =
                "Please enter a valid email address.";
            valid = false;
        }

        // Contact Number (optional)
        const phone = document.getElementById("cPhone").value.trim();

        if (phone !== "" && !/^\d{10}$/.test(phone)) {
            document.getElementById("cPhoneErr").textContent =
                "Phone number must contain 10 digits.";
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
        const department = document.getElementById("cDept").value;

        if (department === "") {
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

        if (message.length < 10) {
            document.getElementById("cMessageErr").textContent =
                "Message must contain at least 10 characters.";
            valid = false;
        }

        // Successful submission
        if (valid) {
            alert("Your message has been sent successfully!");
            contactForm.reset();
        }

    });

}
```
