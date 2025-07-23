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

    jobData.push(jobInfo)
    console.log(jobData)

    // Reset form after adding
    jobForm.reset()
    jobForm.classList.add("hidden")
}

const jobArrayIndex = jobData.findIndex((job) => job.id === currentJob.id)

if (jobArrayIndex === -1) {
  jobData.unshift(jobArrayIndex)
} else {
  jobData[jobArrayIndex] = jobInfo
}

const postDataToPage = () => {
//Left off here 07/23
  jobData.forEach((id, jobTitle, companyName, dateApplied, activity) => {
    (displayedJobInfo.innerHTML += 
      `
      <tbody>
        <tr>
          <td>${id}</td>
          <td>${jobTitle}</td>
          <td>${companyName}</td>
          <td>${dateApplied}</td>
          <td>${activity}</td>
          <td>
            <button id="edit-btn">Edit</button>
            <button id="delete=btn">Delete</button>
          </td>

        </tr>
      </tbody>
      `)
  })
}

// Add Close Form btn functionality
cancelFormBtn.addEventListener("click", () => {
    jobForm.reset()
   jobForm.classList.add("hidden")
})

// Add Edit btn functionality


// Add Delete btn functionality



