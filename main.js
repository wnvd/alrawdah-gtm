const informaForm = document.querySelector("#informa_form");
const informaSubBtn = document.querySelector("#informa_submit_btn");

informaForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(informaForm);

  const informaDataObject = {};

  for (const [key, value] of formData.entries()) {
    informaDataObject[key] = value;
  }


  console.log(informaDataObject);
  dataLayer.push({
    event: 'Informa Form Submissino',
    inputId: 'informa_form',
    testEvent: 'testEvent',
    ...informaDataObject
  })

  try {
    const response = await fetch('/', {
      method: 'Post',
      body: informaDataObject
    });

    if (response.ok) {
      console.log('Form Submited successfully!');
    } else {
      console.log('Error while submitting form!', response.status);
    }
  } catch (error) {
    console.log("Error", error);
  }

});


