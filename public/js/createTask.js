const newFormHandler = async (event) => {
  event.preventDefault();

  const task_name = document.querySelector('#task-name').value.trim();
  const description = document.querySelector('#task-desc').value.trim();

  if (task_name && description) {
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({ task_name, description, }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create task');
    }
  }
};

document
  .querySelector('.new-task-form')
  .addEventListener('submit', newFormHandler);