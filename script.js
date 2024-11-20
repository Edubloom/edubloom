// Select the attendance button
const markAbsentButton = document.getElementById('markAbsent');

// Event listener for marking a student absent
markAbsentButton.addEventListener('click', () => {
    const attendanceStatus = document.querySelector('.attendance p');
    attendanceStatus.innerHTML = '<strong>Status:</strong> Absent';
    alert('Attendance status updated to Absent.');
});
