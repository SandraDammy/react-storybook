import Input from "./Input"
import { options } from './constants'


export default {
    title: "Input",
    component: Input,
}
const Template = (args) => <Input {...args}/>


export const Colors = () => 
options.colors.map((color, index) => {
    return <Input key={index} color={color}/>;
});

export const Sizes = () => 
options.sizes.map((size, index) => {
    return <Input key={index} size={size}/>;
})