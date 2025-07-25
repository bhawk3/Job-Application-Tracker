const addJobApplicationBtn = document.getElementById("add-job-application-btn")
const jobForm = document.getElementById("job-form")
const jobtitleInput = document.getElementById("job-title-input")
const companyNameInput = document.getElementById("company-name-input")
const dateAppliedInput = document.getElementById("date-applied-input")
const activityInput = document.getElementById("activity-input")
const addJobBtn = document.getElementById("add-job-btn")
const editBtn = document.getElementsByClassName("edit-btn")
const deleteBtn = document.getElementsByClassName("delete-btn")
const cancelFormBtn = document.getElementById("cancel-form-btn")
const displayedJobInfo = document.getElementById("displayed-job-info")

// Toggle the form to add new jobs to the list
addJobBtn.addEventListener("click", () =>
jobForm.classList.toggle("hidden")
)

const jobData = []
const currentJob = {}

// This is the submit btn for the add new jobs form
jobForm.addEventListener("submit", (e) => {
e.preventDefault()
addOrUpdateJob()

// The table data can be input through a template literal by adding a tr
})

// Check if the form data is empty
const addOrUpdateJob = () => {
    if (!jobtitleInput.value.trim()) {
        alert("Please add a job title")
        return;
    }

    const jobInfo = {
        id: `${jobtitleInput.value.toLowerCase().split(" ").join("-") }`,
        jobTitle: jobtitleInput.value,
        companyName: companyNameInput.value,
        dateApplied: dateAppliedInput.value,
        activity: activityInput.value
    }

    const jobArrayIndex = jobData.findIndex((job) => job.id === jobInfo.id)

    if (jobArrayIndex === -1) {
  jobData.unshift(jobInfo)
} else {
  jobData[jobArrayIndex] = jobInfo
}

//    jobData.push(jobInfo)
    console.log(jobData)
    postDataToPage()


    // Reset form after adding
    jobForm.reset()
    jobForm.classList.add("hidden")
}

const postDataToPage = () => {
//Left off here 07/23
displayedJobInfo.innerHTML = ""
  
jobData.forEach((job, index) => {
    (displayedJobInfo.innerHTML += 
      ` <tr>
          <td>${job.id}</td>
          <td>${job.jobTitle}</td>
          <td>${job.companyName}</td>
          <td>${job.dateApplied}</td>
          <td>${job.activity}</td>
          <td>
            <button id="edit-btn" >Edit</button>
            <button id="delete=btn" data-index="${index}">Delete</button>
          </td>
        </tr>`
    ); 
  })
}

// Add Close Form btn functionality
cancelFormBtn.addEventListener("click", () => {
    jobForm.reset()
   jobForm.classList.add("hidden")
})

// Add Edit btn functionality


// Add Delete btn functionality
deleteBtn.addEventListener("click", () => {

if (target.classList.contains('delete-btn')) {
    const indexToDelete = parseInt(event.target.dataset.index, 10);
    jobData.splice(indexToDelete, 1);  // Remove that one job from the array
    postDataToPage();
}})


