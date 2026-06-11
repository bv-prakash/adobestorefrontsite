export default async function decorate(block) {
  block.innerHTML = `
      <div class="complaint-form">
        <h2>Complaint Form</h2>
  
        <input
          type="text"
          placeholder="Enter Name"
        />
  
        <textarea
          placeholder="Enter Complaint">
        </textarea>
  
        <button>Submit</button>
      </div>
    `;
}
