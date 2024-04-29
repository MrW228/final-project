import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../style_pdpPage/acc2.css'


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false); 
    };

    return ( 
        <div className='acc2'>
            <h1>Frequently
                Asked
                Questions</h1>
            <div className="accc">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header2">
                        <Typography>What’s inside the bottle?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header2">
                        <Typography>How is it made?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header2">
                        <Typography>can i drink medium-bodied when i amd pragnant or driving?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel3d-header2">
                        <Typography>How long does a bottle keep?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel3d-header2">
                        <Typography>how do you drink medium-bodied?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>

        </div>
    );
}