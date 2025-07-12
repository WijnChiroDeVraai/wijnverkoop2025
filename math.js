const prijsFles = 11;
const prijsDoos = 60;

const inputs = document.querySelectorAll('input[type="number"]');
const totaalveld = document.getElementById('totaalprijs');
const verborgenVeld = document.getElementById('kostprijs');

function controleerOpZesFlessen() {
    const paren = [
        { flessen: 'frood', dozen: 'drood' },
        { flessen: 'fwit', dozen: 'dwit' },
        { flessen: 'frose', dozen: 'drose' }
    ];

    paren.forEach(({ flessen, dozen }) => {
        const flesInput = document.getElementsByName(`entry.${getEntryId(flessen)}`)[0];
        const doosInput = document.getElementsByName(`entry.${getEntryId(dozen)}`)[0];
        const aantalFlessen = parseInt(flesInput.value || 0);

        if (aantalFlessen === 6) {
            flesInput.value = 0;
            doosInput.value = parseInt(doosInput.value || 0) + 1;
        }
    });
}

function berekenPrijs() {
    controleerOpZesFlessen();

    let totaal = 0;

    const dozenVelden = ['drood', 'dwit', 'drose'];
    const flessenVelden = ['frood', 'fwit', 'frose'];

    dozenVelden.forEach(id => {
        const input = document.getElementsByName(`entry.${getEntryId(id)}`)[0];
        totaal += parseInt(input.value || 0) * prijsDoos;
    });

    flessenVelden.forEach(id => {
        const input = document.getElementsByName(`entry.${getEntryId(id)}`)[0];
        totaal += parseInt(input.value || 0) * prijsFles;
    });

    totaalveld.value = '€ ' + totaal;
    verborgenVeld.value = totaal;
}

inputs.forEach(input => {
    input.addEventListener('input', berekenPrijs);
});

window.addEventListener('DOMContentLoaded', berekenPrijs);

// Helperfunctie om ID’s te koppelen aan Google Forms entry-ID’s
function getEntryId(alias) {
    const mapping = {
        frood: '1267685497',
        drood: '1032203904',
        fwit: '2040454508',
        dwit: '624244998',
        frose: '1316571934',
        drose: '1047627196'
    };
    return mapping[alias];
}
