const resumeForm: HTMLFormElement = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput: HTMLElement | null = document.getElementById("resumeOutput");
const imageFileInput: HTMLInputElement = document.getElementById("imageFile") as HTMLInputElement;
const saveChangesBtn: HTMLElement = document.getElementById("saveChangesBtn") as HTMLElement;

let imageDataUrl: string = "";

// for image
imageFileInput.addEventListener("change", (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file: File | null | undefined = fileInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent) {
      const readerTarget = e.target as FileReader;
      imageDataUrl = readerTarget.result as string;
    };
    reader.readAsDataURL(file);
  }
});

resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  // Get data from form
  const formData = new FormData(resumeForm);
  const name: string = formData.get("yourName") as string;
  const title: string = formData.get("yourTitle") as string;
  const description: string = formData.get("desc") as string;
  const email: string = formData.get("yourEmail") as string;
  const phone: string = formData.get("yourPhone") as string;
  const location: string = formData.get("yourLocation") as string;
  const skill1: string = formData.get("skill1") as string;
  const skill2: string = formData.get("skill2") as string;
  const skill3: string = formData.get("skill3") as string;
  const lan1: string = formData.get("lan1") as string;
  const lan2: string = formData.get("lan2") as string;
  const edu: string = formData.get("edu") as string;
  const college: string = formData.get("college") as string;
  const pro1: string = formData.get("pro1") as string;
  const pro2: string = formData.get("pro2") as string;
  const pro3: string = formData.get("pro3") as string;

  // display resume and add contenteditable for edit in each section
  const resumeDisplay: string = `
    <div class="container">
      <div class="header">
        <h1 id="nameSection" contenteditable="true">${name}</h1>
        <h2 id="titleSection" class="yellow" contenteditable="true">${title}</h2>
        <div class="profile">
          <img contenteditable="true" src="${imageDataUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">
          <div class="about-me">
            <h3>About Me</h3>
            <p id="descSection" contenteditable="true">${description}</p>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="left-section">
          <h3>Contact</h3>
          <p id="emailSection" contenteditable="true">Email: ${email}</p>
          <p id="phoneSection" contenteditable="true">Phone: ${phone}</p>
          <p id="locationSection" contenteditable="true">Location: ${location}</p>

          <h3>Skills</h3>
          <ul>
            <li id="skill1Section" contenteditable="true">${skill1}</li>
            <li id="skill2Section" contenteditable="true">${skill2}</li>
            <li id="skill3Section" contenteditable="true">${skill3}</li>
          </ul>

          <h3>Languages</h3>
          <ul>
            <li id="lan1Section" contenteditable="true">${lan1}</li>
            <li id="lan2Section" contenteditable="true">${lan2}</li>
          </ul>
        </div>

        <div class="right-section">
          <h3>Education</h3>
          <p id="eduSection" contenteditable="true">${edu}</p>
          <p id="collegeSection" contenteditable="true">${college}</p>

          <h3>Projects</h3>
          <ul>
            <li id="pro1Section" contenteditable="true">${pro1}</li>
            <li id="pro2Section" contenteditable="true">${pro2}</li>
            <li id="pro3Section" contenteditable="true">${pro3}</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  if (resumeOutput) {
    resumeOutput.innerHTML = resumeDisplay;
  }
  saveChangesBtn.style.display = "block";
});

// Save changes event listener
saveChangesBtn.addEventListener("click", () => {
  // Get edited content and sync back to form fields
  const nameSection = document.getElementById("nameSection")?.textContent || "";
  const titleSection = document.getElementById("titleSection")?.textContent || "";
  const descSection = document.getElementById("descSection")?.textContent || "";
  const emailSection = document.getElementById("emailSection")?.textContent || "";
  const phoneSection = document.getElementById("phoneSection")?.textContent || "";
  const locationSection = document.getElementById("locationSection")?.textContent || "";
  const skill1Section = document.getElementById("skill1Section")?.textContent || "";
  const skill2Section = document.getElementById("skill2Section")?.textContent || "";
  const skill3Section = document.getElementById("skill3Section")?.textContent || "";
  const lan1Section = document.getElementById("lan1Section")?.textContent || "";
  const lan2Section = document.getElementById("lan2Section")?.textContent || "";
  const eduSection = document.getElementById("eduSection")?.textContent || "";
  const collegeSection = document.getElementById("collegeSection")?.textContent || "";
  const pro1Section = document.getElementById("pro1Section")?.textContent || "";
  const pro2Section = document.getElementById("pro2Section")?.textContent || "";
  const pro3Section = document.getElementById("pro3Section")?.textContent || "";

  // Update the form fields with the edited content
  (resumeForm.querySelector("[name='yourName']") as HTMLInputElement).value = nameSection;
  (resumeForm.querySelector("[name='yourTitle']") as HTMLInputElement).value = titleSection;
  (resumeForm.querySelector("[name='desc']") as HTMLTextAreaElement).value = descSection;
  (resumeForm.querySelector("[name='yourEmail']") as HTMLInputElement).value = emailSection;
  (resumeForm.querySelector("[name='yourPhone']") as HTMLInputElement).value = phoneSection;
  (resumeForm.querySelector("[name='yourLocation']") as HTMLInputElement).value = locationSection;
  (resumeForm.querySelector("[name='skill1']") as HTMLInputElement).value = skill1Section;
  (resumeForm.querySelector("[name='skill2']") as HTMLInputElement).value = skill2Section;
  (resumeForm.querySelector("[name='skill3']") as HTMLInputElement).value = skill3Section;
  (resumeForm.querySelector("[name='lan1']") as HTMLInputElement).value = lan1Section;
  (resumeForm.querySelector("[name='lan2']") as HTMLInputElement).value = lan2Section;
  (resumeForm.querySelector("[name='edu']") as HTMLInputElement).value = eduSection;
  (resumeForm.querySelector("[name='college']") as HTMLInputElement).value = collegeSection;
  (resumeForm.querySelector("[name='pro1']") as HTMLInputElement).value = pro1Section;
  (resumeForm.querySelector("[name='pro2']") as HTMLInputElement).value = pro2Section;
  (resumeForm.querySelector("[name='pro3']") as HTMLInputElement).value = pro3Section;

  alert("Changes saved successfully!");
});

//code is already compiled, ensure that not compile the code ,if compiled , go to script.js file and remove last line "expoert{}"