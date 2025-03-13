// Function to add a new GPU resource
async function addResource() {
    const name = document.getElementById('name').value;
    const provider = document.getElementById('provider').value;
    const gpu_type = document.getElementById('gpu_type').value;

    try {
        const response = await fetch('/api/resources', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                provider: provider,
                gpu_type: gpu_type
            })
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to add resource');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the resource');
    }
}

// Function to start a GPU resource
async function startResource(id) {
    try {
        const response = await fetch(`/api/resources/${id}/start`, {
            method: 'POST'
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to start resource');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while starting the resource');
    }
}

// Function to stop a GPU resource
async function stopResource(id) {
    try {
        const response = await fetch(`/api/resources/${id}/stop`, {
            method: 'POST'
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to stop resource');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while stopping the resource');
    }
} 