async function fetchData(url, options = {}) {
    const token = localStorage.getItem('jwtToken'); // Or get from cookies/state

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Example usage:
fetchData('/api/protected-data')
    .then(data => console.log(data))
    .catch(error => {
        // Handle errors, such as token expiration
    });