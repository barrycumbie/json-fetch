$(function() {

    console.log('here'); 

    function jget() {

        console.log("in jget");
        // (A) FETCH REQUEST
        
        fetch("data/john-doe.json")

        // (B) RETURN SERVER RESPONSE AS TEXT
        .then((result) => {
                console.log(result);
                // if (result.status != 200) { throw new Error("Bad Server Response"); }
                return result.json();
            })
            .then((response) => {
                console.log(response);
                console.log(response.name); 
            })

        // (C) HANDLE ERROR
        .catch((error) => { console.log(error); });
    }

    $('#btnLoadDataLocal').on('click', ()=> {
        jget()}
    );

}); 