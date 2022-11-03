import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";


const images = [
    {
        url: `${process.env.PUBLIC_URL}/assets/cakes/buttonbases/classic.png`,
        title: 'Klasszikus torták',
        width: '20%',
        to: "klasszikus"
    },
    {
        url: `${process.env.PUBLIC_URL}/assets/cakes/buttonbases/form.png`,
        title: 'Forma torták',
        width: '20%',
        to: "forma"

    },
    {
        url: `${process.env.PUBLIC_URL}/assets/cakes/buttonbases/unique.png`,
        title: 'Egyedi torták',
        width: '20%',
        to: "egyedi"

    },
    {
        url: `${process.env.PUBLIC_URL}/assets/cakes/buttonbases/children.png`,
        title: 'Gyerek torták',
        width: '20%',
        to: "gyerek"

    },
    {
        url: `${process.env.PUBLIC_URL}/assets/cakes/buttonbases/wedding.png`,
        title: 'Esküvői torták',
        width: '20%',
        to: "eskuvoi"

    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 250,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
    return (
        <Box sx={{ display: 'flex', flexWrap: { xs: "wrap", md: 'nowrap' }, minWidth: 300, width: '100%' }}>
            {images.map((image) => (

                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <Link
                        to={image.to}
                        spy={true}
                        smooth={true}
                        offset={-110}
                        duration={500}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </Link>
                </ImageButton>
            ))}
        </Box>
    );
}
