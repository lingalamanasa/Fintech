document.addEventListener("DOMContentLoaded", () => {
    // Dynamic User Profile
    const email = localStorage.getItem('userEmail');
    if (email) {
        let namePart = email.split('@')[0];
        let parts = namePart.split(/[\.\_\-]/);
        let fullName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(' ');
        
        let initials = parts.slice(0, 2).map(p => p.charAt(0).toUpperCase()).join('');
        if(initials.length === 0) initials = "U";
        
        document.querySelectorAll('.user-info .name, .user-name, .profile-name').forEach(el => {
            el.textContent = fullName;
        });
        document.querySelectorAll('.user-avatar').forEach(el => {
            el.textContent = initials;
        });
    }
});
