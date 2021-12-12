import App from './vue/app.js';

let contactName = "";
let contactInfo = "";
let companyName = "";
let jobTitle = "";
let jobLink = "";
let jobLocation = "";
let jobComments = "";

let formattedData = "";

function validate() {
    // resets the error message warning
    resetErrorMessages();

    // gets all the variables
    contactName = getContactName();
    contactInfo = getContactInfo();
    companyName = getCompanyName();
    jobTitle = getJobTitle();
    jobLink = getJobLink();
    jobLocation = getJobLocation();
    jobComments = getJobComments();

    // checks to ensure all fields are filled out
    if(contactName.length < 2 || contactInfo.length < 2 || companyName.length < 2 || jobTitle.length < 2 || jobLink.length < 2 || jobLocation.length < 2 || jobComments.length < 2) {
        document.getElementById("blankError").style.display = '';
        console.log("Error: All fields must be filled out!");
        return;
    }

    //console.log(contactName + " " + contactInfo + " " + companyName + " " + jobTitle + " " + jobLink + " " + jobLocation + " " + jobComments);

    saveData();

    document.getElementById("submissionForm").setAttribute("method", "POST");
    document.getElementById("submissionForm").setAttribute("action", "https://formspree.io/f/xrgjgpbl");
    document.getElementById("submissionForm").submit();
}

function saveData() {
    console.log(contactName + " " + contactInfo + " " + companyName + " " + jobTitle + " " + jobLink + " " + jobLocation + " " + jobComments);

    formattedData = 
    '\r Name: ' + contactName + ' \r\n ' + 
    'Contact Info: ' + contactInfo + ' \r\n ' + 
    'Company: ' + companyName + ' \r\n ' + 
    'Job Title: ' + jobTitle + ' \r\n ' + 
    'Job Link: ' + jobLink + ' \r\n ' + 
    'Job Location: ' + jobLocation + ' \r\n ' + 
    'Comments: ' + jobComments;

    console.log(formattedData);

    return formattedData;
}

function resetErrorMessages() {
    // reset error messages
    document.getElementById("blankError").style.display = 'none';
}

function getContactName() {
    contactName = document.getElementById("contactName").value;
    contactName = contactName.toLowerCase();
    return contactName;
}

function getContactInfo() {
    contactInfo = document.getElementById("contactInfo").value;
    contactInfo = contactInfo.toLowerCase();
    return contactInfo;
}

function getCompanyName() {
    companyName = document.getElementById("companyName").value;
    companyName = companyName.toLowerCase();
    return companyName;
}

function getJobTitle() {
    jobTitle = document.getElementById("jobTitle").value;
    jobTitle = jobTitle.toLowerCase();
    return jobTitle;
}

function getJobLink() {
    jobLink = document.getElementById("jobLink").value;
    jobLink = jobLink.toLowerCase();
    return jobLink;
}

function getJobLocation() {
    jobLocation = document.getElementById("jobLocation").value;
    jobLocation = jobLocation.toLowerCase();
    return jobLocation;
}

function getJobComments() {
    jobComments = document.getElementById("jobComments").value;
    jobComments = jobComments.toLowerCase();
    return jobComments;
}

new Vue({
    render: h => h(App),
  }).$mount(`#app`);