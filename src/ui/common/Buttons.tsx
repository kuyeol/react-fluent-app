import React from 'react';
import { Button } from '@fluentui/react-components';
import { makeStyles } from '@fluentui/react-components';



interface Props {
    name: string;
}

const useStyles = makeStyles({
    root: {
        margin: "10px",
        color: 'red',
        backgroundColor: 'black',
        padding: "10px",
        border:"2px solid green"
    },
});

function Component() {
    const flStyle = useStyles();

    return (
    
    <div className={flStyle.root} />
);
}

const Buttons: React.FC<Props> = ({ name }) => {
    const flStyle = useStyles();
    return (
        <div className={flStyle.root}>
            <Component />


            <Button appearance="primary">{name}</Button>

        </div>

    );

}

export default Buttons;
