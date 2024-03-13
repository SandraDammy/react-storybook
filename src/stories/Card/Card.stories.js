import Card from "./Card"
import { options } from './constants'


export default {
    title: "Card",
    component: Card,
    args: {
        children: "Label"
    },
    argTypes: {
        color: {
            description: "**options:**",
            table: {
                type: {
                    summary: options.colors.map(option => `'${option}'`).join("|")
                }
            },
            control: {
                type: "select", option:options.colors
            }
        },
        size: {
            description: "**options:**",
            table: {
                type: {
                    summary: options.sizes.map(option => `'${option}'`).join("|")
                }
            },
            control: {
                type: "select", option:options.sizes
            }
        },
    }
}

/*using Template*/
const Template = (args) => <Card {...args}/>

/*using Template List*/
const ListTemplate = ({ items, ...args}) => items.map 
((item, index) => <Card key={index} {...args} {...item}/>)

// export const Default = () => <Card/>;

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
Normal .args = {
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

// export const Colors = () => 
// options.colors.map((color, index) => {
//     return <Card key={index} color={color}/>;
// });

// export const Sizes = () => 
// options.sizes.map((size, index) => {
//     return <Card key={index} size={size}/>;
// });

export const Colors = ListTemplate.bind({})
Colors.args = {
    items: options.colors.map(color => ({color}))
};

export const Sizes = ListTemplate.bind({})
Sizes.args = {
    items: options.sizes.map(size => ({size}))
};