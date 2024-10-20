let directionToSpecialities = {}; 

function fetchDirectionToSpecialities() {
    return fetch(`${window.origin}/services/api/profession_mapper/`) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети при получении направлений');
            }
            return response.json();
        })
        .then(data => {
            directionToSpecialities = data;
        })
        .catch(error => {
            console.error('Ошибка при получении данных: ', error);
        });
}
fetchDirectionToSpecialities();

function getSpecialitiesForDirections(directions) {
    return directions
        .map(direction => directionToSpecialities[direction] || null)
        .filter(speciality => speciality !== null);
}


document.addEventListener('DOMContentLoaded', () => {
    fetchDirectionToSpecialities()
});


function getRoleForDirections(directions) {
    const specialities = getSpecialitiesForDirections(directions);

        const role = specialities
        .map((speciality, index) => 
            index === 0 
                ? speciality.charAt(0).toUpperCase() + speciality.slice(1).toLowerCase() 
                : speciality.toLowerCase()
        )
        .join(", ");

        return role;
}

export { getRoleForDirections };