import { Appbar } from "@repo/ui/appbar"
import { signIn,signOut,useSession } from "next-auth/react"
import { useRouter } from "next/router"

export function AppbarClient () {
    const router = useRouter();
    const session = useSession();
    return (
    <div>
        <Appbar onSIgnIn={signIn} onSignout={async () => {
            await signOut() 
            router.push("/api/auth/signIn")
        }} user ={session.data?.user}/>
    </div>
    );
}