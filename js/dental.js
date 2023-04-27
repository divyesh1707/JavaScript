let tc_s = 1, tc_c = 500;
let fl_s = 2, fl_c = 1500;
let rct_s = 4, rct_c = 2500;
let rctc_s = 6, rctc_c = 12000;
let brc_s = 12, brc_c = 35000;

let final_s, final_c, final_t;

function select(t, s, c) {
    document.getElementById("treat").innerHTML = t;
    document.getElementById("seating").innerHTML = s;
    document.getElementById("costing").innerHTML = c;

    final_s = s;
    final_c = c;
    final_t = t;

}

function handleTreatment() {
    let val = document.getElementById("treatment").value;


    if (val === 'tc') {
        select("Teeth Cleanings", tc_s, tc_c);
    } else if (val === 'fl') {
        select("Fillings", fl_s, fl_c);
    } else if (val === 'rct') {
        select("Root Canal Treatment", rct_s, rct_c);
    } else if (val === 'rctc') {
        select("RCT + Cover", rctc_s, rctc_c);
    } else if (val === 'brc') {
        select("Braces/Invisalign", brc_s, brc_c);
    }

    document.getElementById("place").style.display = 'block';
}

function appDate() {
    let date = document.getElementById("date").value;
    console.log(date, final_s, final_c);

    let per_c = final_c / final_s;

    per_c = parseFloat(per_c.toFixed(2));

    let appdate = new Date(date);

    let print = '';

    print += '<table border="1"><tr><th>Seating</th><th>Date</th><th>Costing</th></tr>'

    for (let i = 0; i < final_s; i++) {
        if (i === 0) {
            print += '<tr>'
            print += '<td>' + (i + 1) + '</td>'
            print += '<td>' + appdate.toLocaleDateString() + '</td>'
            print += '<td>' + per_c + '</td>'
            print += '</tr>'
            // console.log(i, per_c, appdate.toLocaleDateString());
        } else {
            appdate.setDate(appdate.getDate() + 7);
            print += '<tr>'
            print += '<td>' + (i + 1) + '</td>'
            print += '<td>' + appdate.toLocaleDateString() + '</td>'
            print += '<td>' + per_c + '</td>'
            print += '</tr>'
            // console.log(i, per_c, appdate.toLocaleDateString());
        }
        document.getElementById("tr-plan").style.display = 'block';
        document.getElementById("tr-plan").innerHTML = print;

    }

    print += '</table>'

}

let d = document.getElementById("bookapp");
d.addEventListener("click", appDate);