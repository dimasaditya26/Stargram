document.addEventListener('DOMContentLoaded', () => {
    const userSignUpForm = document.getElementById('userSignUpForm');
    const userLoginForm = document.getElementById('userLoginForm');
    const photoForm = document.getElementById('photoForm');
    const socialMediaForm = document.getElementById('socialMediaForm');
    const commentForm = document.getElementById('commentForm');

    if (userSignUpForm) {
        userSignUpForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(userSignUpForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (userLoginForm) {
        userLoginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(userLoginForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (photoForm) {
        photoForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(photoForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/photos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (socialMediaForm) {
        socialMediaForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(socialMediaForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/socialmedias', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (commentForm) {
        commentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(commentForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});
