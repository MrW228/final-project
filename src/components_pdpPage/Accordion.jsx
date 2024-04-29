import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import '../style_pdpPage/acc.css'


export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='acc'>


            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header2">
                    <Typography>DETAILS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorea. ipsum dolor sit amet
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header2">
                    <Typography>FULL INGREDIENTS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem. ipsum dolor sit amet
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header2">
                    <Typography>PRODUCT FEATURES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}