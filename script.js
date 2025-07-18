const addJobApplicationBtn = document.getElementById("add-job-application-btn")
const jobForm = document.getElementById("job-form")
const jobtitleInput = document.getElementById("job-title-input")
const companyNameInput = document.getElementById("company-name-input")
const dateAppliedInput = document.getElementById("date-applied-input")
const activityInput = document.getElementById("activity-input")
const addJobBtn = document.getElementById("add-job-btn")
const editBtn = document.getElementById("edit-btn")
const deleteBtn = document.getElementById("delete-btn")
const cancelFormBtn = document.getElementById("cancel-form-btn")

// Toggle the form to add new jobs to the list
addJobBtn.addEventListener("click", () =>
jobForm.classList.toggle("hidden")
)

const jobData = []

// This is the submit btn for the add new jobs form
jobForm.addEventListener("submit", (e) => {
e.preventDefault()

const jobInfo = {
    jobTitle: jobtitleInput.value,
    companyName: companyNameInput.value,
    dateApplied: dateAppliedInput.value,
    activity: activityInput.value
}
jobData.push(jobInfo)
console.log(jobData)

// The table data can be input through a template literal by adding a tr
})

// Check if the form data is empty
const addOrUpdateJob = () => {
    if (jobtitleInput.value == " ") {
        alert("Please add a job")
        return;
    }
}

const jobArrayIndex = jobData.findIndex()

// Add Close Form btn functionality
cancelFormBtn.addEventListener("click", () => 
    jobForm.classList.toggle("hidden")
)

// Add Edit btn functionality


// Add Delete btn functionality


// Create the form data functionality

