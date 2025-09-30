import Image from "./Image"
import '../App.css'

function Profile(){
    return(
        <>
            <section className="profile-image">
                <Image></Image>
            </section>
            <section className="description">
                <h1>Thanos</h1>
                <p>O maior vilão de todos o proprio dedo do thanos, o bulhufador do atacama, o brabo</p>
            </section>
                
        </>
        
    )
}

export default Profile