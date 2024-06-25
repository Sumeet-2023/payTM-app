import { Button } from "./button";

interface AppbarProps {
    user? : {
        name? : string | null;
    },
    onSignout : any,
    onSIgnIn : any
}

export const Appbar = ({user ,onSignout, onSIgnIn} : AppbarProps) => {
    return <div className="flex justify-between border-b px-4">
    <div className="text-lg flex flex-col justify-center">
        PayTM
    </div>
    <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSIgnIn}>{user ? "Logout" : "Login"}</Button>
    </div>
</div>
}