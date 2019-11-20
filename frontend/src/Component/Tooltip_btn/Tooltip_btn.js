import React, { useState } from 'react';
import { Button, Tooltip } from 'reactstrap';

const Tooltip_btn = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);


    return (
        <div>
            {/*<Button outline color={tool_data_recu.btn_color} id={tool_data_recu.btn_id}>
            {tool_data_recu.btn_text}
        </Button>
        <Tooltip placement={tool_data_recu.tooltip_placement} isOpen={tooltipOpen} target={tool_data_recu.btn_id} toggle={toggle}>
          {tool_data_recu.tooltip_text}
    </Tooltip>*/}
            <Button outline color="info" id="navbar_btn">
                Gérer
            </Button>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="navbar_btn" toggle={toggle}>
                Ajoutez, supprimez, gérez vos widgets !
            </Tooltip>
        </div>
    );
}

export default Tooltip_btn;