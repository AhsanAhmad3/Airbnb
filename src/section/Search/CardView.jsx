import { Box, Tab, Tabs } from "@mui/material";
import { Bed, CastleTurret, Park, SwimmingPool, TreePalm, Umbrella } from "@phosphor-icons/react";
import PropTypes from 'prop-types';



CardView.propTypes = {
    value: PropTypes.string,
    handleChangeTab: PropTypes.func,
};


export default function CardView(props) {

    return (

        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={props.value}
                    onChange={props.handleChangeTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile>

                    <Tab label="National Parks" icon={<Park size={20} />} />

                    <Tab label="Castle" icon={<CastleTurret size={20} />} />
                    <Tab label="Beach" icon={<Umbrella size={20} />} />
                    <Tab label="Tropical" icon={<TreePalm size={20} />} />
                    <Tab label="Rooms" icon={<Bed size={20} />} />
                    <Tab label="Amazing Pool" icon={<SwimmingPool size={20} />} />

                </Tabs>

            </Box>

        </Box>

    );

}

