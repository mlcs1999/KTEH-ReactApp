import { User } from './models/userModel';


// import { TestCompoment } from './TestComponent';
// export function TestCompoment() {

function TestComponent() {
    // const ime : string = "Tamara";

    // const user = {
    //     ime: "Mateja",
    //     prezime: "Mandic"
    // }

    // type User = {
    //     ime: string;
    //     prezime: string;
    // }

    // inline tip ulaznog parametra
    // function imeKorisnika(user : {ime: string, prezime: string}) : string {
    //     return user.ime;
    // }

    // pozivanje preko tipa
    function imeKorisnika(user : User) : string {
        return user.ime;
    }

    return (
        <div>
            <h1>Zdravo, {imeKorisnika({ ime: "Vuk", prezime: "Mandic"})}</h1>
        </div>
    )
}

export default TestComponent;
//import TestComponent from './TestComponent';