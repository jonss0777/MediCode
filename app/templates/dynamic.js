document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('eventList');
    const activityList = document.getElementById('activityList');

    // Sample data
    const events = [
        { title: 'Annual Club Meeting', description: 'Join us for the annual club meeting to discuss upcoming projects.' },
        { title: 'Summer BBQ Party', description: 'Enjoy a fun BBQ party with games and food!' },
        { title: 'Winter Gala', description: 'Dress up and celebrate the end of the year at our winter gala.' }
    ];

    const activities = [
        { title: 'Volunteer at Local Shelter', description: 'Help out at the local shelter and make a difference.' },
        { title: 'Book Club Discussion', description: 'Discuss this month’s book selection with fellow members.' },
        { title: 'Weekend Hike', description: 'Explore the great outdoors with a weekend hike.' }
    ];

    function addItemsToList(items, listElement) {
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'event-item'; // Use 'activity-item' for activities
            div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            listElement.appendChild(div);
        });
    }

    // Add events and activities
    addItemsToList(events, eventList);
    addItemsToList(activities, activityList);
});
