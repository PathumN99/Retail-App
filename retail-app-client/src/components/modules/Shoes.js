import ShoeCSS from "../../style/Shoe.module.css"

export default function Shoes() {
    return (
        <div>
            <p>Shoesssssssssssssssssss Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
            <button className={ShoeCSS.button}>Button</button>
        </div>
    )
}