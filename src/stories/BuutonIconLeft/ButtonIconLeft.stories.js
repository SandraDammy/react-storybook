import ButtonIconLeft from "./ButtonIconLeft"
import { options } from "../Button/constants";


export default {
    title: "ButtonIconLeft",
    component: ButtonIconLeft,
}

export const Default = () => <ButtonIconLeft/>;

export const Colors = () => 
options.colors.map((color, index) => {
    return <ButtonIconLeft key={index} color={color}/>;
});

export const Sizes = () => 
options.sizes.map((size, index) => {
    return <ButtonIconLeft key={index} size={size}/>;
});