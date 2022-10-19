import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import UserMenu from "../components/UserMenu";
import { logIn } from "../redux/userSlice";


export default function LoginPage() {
const nav = useNavigate()
    const dispatch = useDispatch()

const isLogIn = useSelector(state => state.user.isLoggedIn)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.elements.login.value)
        dispatch(logIn(e.target.elements.login.value))
        // nav("/dashboard", {replace:true})
}

    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" />
                <button type="submit" >log in</button>
            </form>
            {isLogIn && <UserMenu/>}
        </div>
    );
};
