import ButtonIconRight from "./ButtonIconRight"
import { options } from "../Button/constants";


export default {
    title: "ButtonIconRight",
    component: ButtonIconRight,
}

export const Default = () => <ButtonIconRight/>;

export const Colors = () => 
options.colors.map((color, index) => {
    return <ButtonIconRight key={index} color={color}/>;
});

export const Sizes = () => 
options.sizes.map((size, index) => {
    return <ButtonIconRight key={index} size={size}/>;
});