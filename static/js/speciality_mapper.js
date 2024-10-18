// Модуль для отображения специализации доктора по направлению его деятельности
const directionToSpecialities = {
    "Остеопатия": "Врач-остеопат",
    "Мануальная терапия": "Мануальный терапевт",
    "Йога": "Инструктор йоги",
};

function getSpecialitiesForDirections(directions) {
    return directions
        .map(direction => directionToSpecialities[direction] || null)
        .filter(speciality => speciality !== null);
}

function getRoleForDirections(directions) {
    const specialities = getSpecialitiesForDirections(directions);
        console.log(specialities);

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