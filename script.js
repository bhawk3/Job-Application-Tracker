const addJobApplicationBtn = document.getElementById("add-job-application-btn");
const jobForm = document.getElementById("job-form");
const jobtitleInput = document.getElementById("job-title-input");
const companyNameInput = document.getElementById("company-name-input");
const dateAppliedInput = document.getElementById("date-applied-input");
const activityInput = document.getElementById("activity-input");
const addJobBtn = document.getElementById("add-job-btn");
const cancelFormBtn = document.getElementById("cancel-form-btn");
const displayedJobInfo = document.getElementById("displayed-job-info");

const jobData = JSON.parse(localStorage.getItem("jobData")) || [];
let currentEditIndex = null;

postDataToPage();

// Toggle the form to add new jobs to the list
addJobBtn.addEventListener("click", () => jobForm.classList.toggle("hidden"));

// This is the submit btn for the add new jobs form
jobForm.addEventListener("submit", (e) => {
	e.preventDefault();
	addOrUpdateJob();
	currentEditIndex = null;
});

// Check if the form data is empty
const addOrUpdateJob = () => {
	if (!jobtitleInput.value.trim()) {
		alert("Please add a job title");
		return;
	}

	const jobInfo = {
		id: `${jobtitleInput.value.toLowerCase().split(" ").join("-")}`,
		jobTitle: jobtitleInput.value,
		companyName: companyNameInput.value,
		dateApplied: dateAppliedInput.value,
		activity: activityInput.value,
	};

	if (currentEditIndex === null) {
		jobData.unshift(jobInfo);
	} else {
		jobData[currentEditIndex] = jobInfo;
	}

	//    jobData.push(jobInfo)
	console.log(jobData);
	postDataToPage();

	localStorage.setItem("jobData", JSON.stringify(jobData));
	// Reset form after adding
	jobForm.reset();
	jobForm.classList.add("hidden");
};

function postDataToPage() {
	//Left off here 07/23
	displayedJobInfo.innerHTML = "";

	jobData.forEach((job, index) => {
		displayedJobInfo.innerHTML += ` <tr>
          <!--<td>${job.id}</td>-->
          <td>${job.jobTitle}</td>
          <td>${job.companyName}</td>
          <td>${job.dateApplied}</td>
          <td>${job.activity}</td>
          <td>
            <button class="edit-btn" data-index="${index}" >Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
          </td>
        </tr>`;
	});
}

// Add Close Form btn functionality
cancelFormBtn.addEventListener("click", () => {
	jobForm.reset();
	jobForm.classList.add("hidden");
	currentEditIndex = null;
});

// Add Edit btn functionality
// Add Delete btn functionality
displayedJobInfo.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-btn")) {
		const indexToDelete = parseInt(e.target.dataset.index, 10);
		jobData.splice(indexToDelete, 1); // Remove that one job from the array
		localStorage.setItem("jobData", JSON.stringify(jobData));
		postDataToPage();
	}

	if (e.target.classList.contains("edit-btn")) {
		jobForm.classList.toggle("hidden");
		const jobArrIndex = parseInt(e.target.dataset.index, 10);

		//const editIndex = parseInt(e.target.dataset.index, 10);
		if (jobArrIndex !== -1) {
			let updatedJobInfo = jobData[jobArrIndex];

			jobtitleInput.value = updatedJobInfo.jobTitle;
			companyNameInput.value = updatedJobInfo.companyName;
			dateAppliedInput.value = updatedJobInfo.dateApplied;
			activityInput.value = updatedJobInfo.activity;

			currentEditIndex = jobArrIndex;
			addJobApplicationBtn.innerText = "Update Job";
		}
	}
});
