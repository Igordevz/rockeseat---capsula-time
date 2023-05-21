import Image from "next/image";
import logo from "../assets/logo.png"
export default function Loading(){

    return(
        <main style={{ 
                width: "100%",
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: "#121215",
            }}>
             <Image alt="logo" src={logo}></Image>
        </main>
    )

}