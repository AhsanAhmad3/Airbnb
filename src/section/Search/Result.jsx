import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { Columns, MapTrifold } from "@phosphor-icons/react";
import { useState } from "react";
import useResposive from "../../hooks/useResponsive"
import CardView from "./CardView";


const Result = () => {

    const [view, setView] = useState("card");

    const isDesktop = useResposive("up", "md");

    return (
        <Stack sx={{ px: 3, py: 2 }} spacing={2}>
            <Box>
                <Grid container>
                    <Grid item md={6} xs={12} >
                        <Typography variant="body 2" textAlign={{ xs: "center", md: "start" }} sx={{ fontWeight: 600 }}>
                            Found 100 more results based on your search
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent={isDesktop ? "flex-end" : "center"} md={6} xs={12}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Chip
                                onClick={() => {
                                    setView("map");
                                }
                                }
                                sx={{ p: 1 }}
                                color="primary"
                                variant={view == "map" ? "filled" : "outlined"}
                                label={<Typography variant="subtitle2"> Map View</Typography>}
                                icon={<MapTrifold size={20} weight="bold" />}
                            />

                            <Chip
                                onClick={() => {
                                    setView("card");
                                }
                                }
                                sx={{ p: 1 }}
                                color="primary"
                                variant={view !== "map" ? "filled" : "outlined"}
                                label={<Typography variant="subtitle2"> Card View</Typography>}
                                icon={<Columns size={20} weight="bold" />}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>


            {view === 'map' ? (
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            {/* Card view */}

                        </Grid>

                        <Grid item md={6} xs={12}>
                            {/* Map view */}

                        </Grid>

                    </Grid>
                </Box>) :
                (
                    <CardView/>
                )

            }

        </Stack>

    );

};


export default Result;