import Button from "./Button"
import { options } from './constants'


export default {
    title: "Button",
    component: Button,
}

const Template = (args) => <Button {...args}/>

export const Default = Template.bind({})

export const Clickable = Template.bind({})
Clickable.args = {
    isClickable: true
}

export const Draggable = Template.bind({})
Draggable.args = {
   isDraggable: true
}
export const Normal = Template.bind({})
Normal.args = {
    isNormal : true
}
export const Hover = Template.bind({})
Hover.args = {
    isHover: true
}
export const Pressed = Template.bind({})
Pressed.args = {
    isPressed: true
}
export const Disabled = Template.bind({})
Disabled.args = {
    isDisabled: true
}



export const Colors = () => 
options.colors.map((color, index) => {
    return <Button key={index} color={color}/>;
});

export const Sizes = () => 
options.sizes.map((size, index) => {
    return <Button key={index} size={size}/>;
});