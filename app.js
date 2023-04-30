const add_input = document.querySelector('#add_input')
const Add = document.querySelector('#submit')
const container = document.querySelector('#container')

Add.addEventListener('click', (e) => {

  e.preventDefault();
  if (add_input.value){
    const edit_text = document.createElement('input');
    edit_text.classList.add('input_list')
    edit_text.setAttribute('value',add_input.value);
    edit_text.setAttribute('readonly','readonly');

    const edit_button = document.createElement('button');
    edit_button.innerHTML= 'Edit';
    edit_button.classList.add('button-80');
    const delete_button = document.createElement('button');
    delete_button.innerHTML = 'X';
    delete_button.classList.add('button-80')
    const single_task_div = document.createElement('div');

    container.appendChild(single_task_div);
    single_task_div.appendChild(edit_text);
    single_task_div.appendChild(edit_button);
    single_task_div.appendChild(delete_button);

    edit_button.addEventListener('click', (e) =>{
      if(edit_button.innerHTML == "Edit"){
        edit_button.innerHTML = 'Save';
        edit_text.removeAttribute('readonly');
        edit_text.focus();
      }else{
        edit_button.innerHTML = 'Edit';
        edit_text.setAttribute('readonly','readonly');
      }
    })
		delete_button.addEventListener('click', (e) => {
			container.removeChild(single_task_div);
		});

  }else
  {
    alert('You Should Atleast have a Task in Mind to Add!')
  }


});