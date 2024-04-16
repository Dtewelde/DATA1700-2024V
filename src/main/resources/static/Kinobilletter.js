
function validerInput(){

}
const filmer = [];
function kjopBillett() {
    let trykketfilm = ""
    let fnavn = ""
    let enavn = ""
    let antall = ""
    let tel = ""
    let epost = ""
    console.log("Vi er inne i kjøpbilett")
    let a = 0;


    if (document.getElementById('filmer').value === 'Velg film her') {
        document.getElementById('flfeilmelding').innerText = "velg en film"
        a++;

    } else {
        trykketfilm = document.getElementById('filmer').value;
    }
    console.log(trykketfilm)
    if (document.getElementById('antall').value === "") {
        document.getElementById('antallfeilmelding').innerText = "Må skrive noe inn i antall"
        a++;
    } else {
        let num = Number(document.getElementById('antall').value);
        if (isNaN(num)) {
            document.getElementById('antallfeilmelding').innerText = "Må skrive antall"
            a++;
        }
        antall = document.getElementById('antall').value;

        console.log(antall)
    }
    if (document.getElementById('fnavn').value === "") {
        console.log(filmer.fnavn)
        document.getElementById('fofeilmelding').innerText = "Må skrive noe inn i fornavn"
        a++;
    } else {
        fnavn = document.getElementById('fnavn').value;
    }

    console.log(fnavn)
    if (document.getElementById('enavn').value === "") {
        document.getElementById('efeilmelding').innerText = "Må skrive noe inn i etteernavn"
        a++;
    } else {
        enavn = document.getElementById('enavn').value;

        console.log(enavn)
    }
    if (document.getElementById('tel').value === "") {
        document.getElementById('tfeilmelding').innerText = "Må skrive noe inn i telefonnr"
        a++;

    } else {
        let num2 = Number(document.getElementById('tel').value);
        if (isNaN(num2)) {
            document.getElementById('tfeilmelding').innerText = "Må skrive antall"
            a++;
        }
        tel = (document.getElementById('tel').value);
        console.log(tel)
    }
    if (document.getElementById('epost').value === "") {
        document.getElementById('epfeilmelding').innerText = "Må skrive noe inn i epost"
        a++;
    } else {
        epost = document.getElementById('epost').value;
    }

    console.log(epost)

    const Kinobilletter = {
        valgtfilm: trykketfilm,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        tel: tel,
        epost: epost
    };
    console.log()

    if (a === 0 && document.getElementById('filmer').value !== 'Velg film her') {
        /// filmer.push(Kinobillett)
        $.post("/lagre", Kinobilletter, function () {
            $.get("/hentAlle", function (data) {
                // Opprett en ny liste for å lagre de mottatte kinobillettene
                var filmer = [];

                // Iterer gjennom hvert element i data-listen
                data.forEach(function (kinobillett) {
                    // Opprett et nytt objekt basert på dataene fra serveren
                    var kinobillett = {
                        valgtfilm: kinobillett.valgtfilm,
                        antall: kinobillett.antall,
                        fnavn: kinobillett.fnavn,
                        enavn: kinobillett.enavn,
                        tel: kinobillett.tel,
                        epost: kinobillett.epost
                    };

                    // Legg til det nye objektet i listen
                    filmer.push(kinobillett);
                });

                // Logger filmer til konsollen for å sjekke dataene
                console.log(filmer);

                let ut = "<table id='table'><tr>" + "<th>Filmer</th><th>Antall</th><th>fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
                    "</tr>";

                for (let o of filmer) {
                    ut += "<tr>";
                    ut += "<td>" + o.valgtfilm + "</td><td>" + o.antall + "</td><td>"
                        + o.fnavn + "</td><td>" + o.enavn + "</td><td>"
                        + o.tel + "</td><td>" + o.epost + "</td>";
                    ut += "</tr>";
                }
                ut += "</table>";
                document.getElementById('booket').innerHTML = ut;
                blankInput();
            });
        });

    }





}
function blankInput() {
    document.getElementById('filmer').value = 'Velg film her';
    document.getElementById('fnavn').value = "";
    document.getElementById('antall').value = "";
    document.getElementById('enavn').value = "";
    document.getElementById('tel').value = "";
    document.getElementById('epost').value = "";
    document.getElementById('flfeilmelding').innerText = "";
    document.getElementById('antallfeilmelding').innerText = "";
    document.getElementById('fofeilmelding').innerText = "";
    document.getElementById('efeilmelding').innerText = "";
    document.getElementById('tfeilmelding').innerText = "";
    document.getElementById('epfeilmelding').innerText = "";


}
function deleteAll() {
    filmer.length = 0;
    console.log("hei")
    $.get("/slettAlle")
    document.getElementById('booket').innerHTML = "";
    blankInput();
}













